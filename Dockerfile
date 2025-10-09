FROM node:24 AS base
WORKDIR /app
RUN npm i -g pnpm
RUN npm i -g next

COPY package*.json ./
RUN pnpm install

COPY . .

ARG NEXT_PUBLIC_APP_URL
ENV NEXT_PUBLIC_APP_URL=$NEXT_PUBLIC_APP_URL

RUN pnpm build

FROM node:24.9-alpine3.21 AS release
WORKDIR /app
RUN npm i -g pnpm

COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/package.json ./package.json
COPY --from=base /app/.next ./.next
COPY --from=base /app/public ./public

EXPOSE 3000

CMD ["pnpm", "start"]