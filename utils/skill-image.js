import angular from '/public/svg/skills/angular.svg';
import aws from '/public/svg/skills/aws.svg';
import css from '/public/svg/skills/css.svg';
import docker from '/public/svg/skills/docker.svg';
import git from '/public/svg/skills/git.svg';
import html from '/public/svg/skills/html.svg';
import java from '/public/svg/skills/java.svg';
import javascript from '/public/svg/skills/javascript.svg';
import mongoDB from '/public/svg/skills/mongoDB.svg';
import mysql from '/public/svg/skills/mysql.svg';
import postgresql from '/public/svg/skills/postgresql.svg';
import typescript from '/public/svg/skills/typescript.svg';
import junit from '/public/svg/skills/junit.svg';
import vue from '/public/svg/skills/vue.svg';
import springboot from '/public/svg/skills/springboot.svg';
import cypress from '/public/svg/skills/cypress.svg';
import postman from '/public/svg/skills/postman.svg';
import openshift from '/public/svg/skills/openshift.svg';
import tuleap from '/public/svg/skills/tuleap.svg';
import swagger from '/public/svg/skills/swagger.svg';
import gitlab from '/public/svg/skills/gitlab.svg';
import github from '/public/svg/skills/github.svg';
import jira from '/public/svg/skills/jira.svg';
import vscode from '/public/svg/skills/vscode.svg';
import zeplin from '/public/svg/skills/zeplin.svg';
import oracle from '/public/svg/skills/oracle.svg';

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'html':
      return html;
    case 'docker':
      return docker;
    case 'css':
      return css;
    case 'angular':
      return angular;
    case 'javascript':
      return javascript;
    case 'typescript':
      return typescript;
    case 'vue':
      return vue;
    case 'mongodb':
      return mongoDB;
    case 'mysql':
      return mysql;
    case 'postgresql':
      return postgresql;
    case 'java':
      return java;
    case 'aws':
      return aws;
    case 'git':
      return git;
    case 'junit':
      return junit;
    case 'spring boot':
      return springboot;
    case 'cypress':
      return cypress;
    case 'postman':
      return postman;
    case 'openshift':
      return openshift;
    case 'tuleap':
      return tuleap;
    case 'swagger':
      return swagger;
    case 'gitlab':
      return gitlab;
    case 'github':
      return github;
    case 'jira':
      return jira;
    case 'vscode':
      return vscode;
    case 'zeplin':
      return zeplin;
    case 'oracle':
      return oracle;
    default:
      break;
  }
}
