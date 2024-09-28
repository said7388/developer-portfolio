import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'SIEM Implementation for Real-Time Threat Detection',
        description: "Designed and deployed a Security Information and Event Management (SIEM) system using the ELK Stack to monitor real-time threats. Logs were collected from various sources such as web servers and firewalls, with automated ingestion processes. Custom security alerts and dashboards were developed to detect potential threats like brute force attacks and port scanning, enhancing incident response through streamlined monitoring.",
        tools: ['SIEM', 'ELK Stack', 'Log Management', 'Threat Detection', 'Automation', 'Incident Response', 'Security Monitoring', 'Custom Alerts', 'Dashboards'],
        role: 'Backend Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Intrusion Detection System (IDS) with Snort',
        description: 'Configured and deployed a Snort-based Intrusion Detection System (IDS) to monitor network traffic and integrated it with the SIEM system for real-time threat analysis. The system was tested using penetration testing tools such as Metasploit and Nmap to simulate attacks, verifying its detection capabilities for SQL injections and brute force attacks.',
        tools: ['Snort', 'Intrusion Detection', 'Network Traffic Analysis', 'Penetration Testing', 'Metasploit', 'Nmap', 'SQL Injection Detection', 'Brute Force Detection', 'SIEM Integration'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'SymptoSeek',
        description: 'Originated the concept and led a team of five in developing a healthcare analytics platform, utilizing Python and Azure APIs on Raspberry Pi-4b for efficient data exchange and system interoperability. Designed a scalable and secure SQL database, enhancing patient data management and improving disease metric storage and retrieval with high data integrity and accessibility. Collaborated with Professor Vital on collecting and analyzing healthcare data using advanced AI and machine learning techniques, including gradient boosting, to accurately predict diseases based on user inputs.',
        tools: ['Python', 'Azure APIs', 'Raspberry Pi-4b', 'SQL', 'Database Management', 'AI', 'Machine Learning', 'Gradient Boosting', 'Data Analysis', 'System Interoperability', 'Azure'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    },
    {
        id: 4,
        name: 'Ransomware Simulation & Defense',
        description: "Simulated a ransomware attack to assess system vulnerabilities and tested network segmentation and endpoint security defenses to contain the attack. Backup and recovery solutions were implemented for automated file restoration, minimizing data loss, and ensuring business continuity.",
        tools: ['Ransomware Defense', 'Network Segmentation', 'Endpoint Security', 'Backup Solutions', 'Recovery Solutions', 'Vulnerability Assessment'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    },
    {
        id: 5,
        name: 'Medical Hub Website for ThermoWear & Medbot Integration',
        description: "Collaborated with Dr. Dieff Vital to integrate ThermoWear and AI diagnostics into a medical hub website, providing users with enhanced health insights. Utilized Python and SQL for the backend while leveraging HTML, CSS, and JavaScript for the front-end, ensuring a seamless user experience.",
        tools: ['Python', 'SQL', 'HTML', 'CSS', 'JavaScript', 'AI Integration', 'Health Technology', 'User Interface Design', 'Data Security'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    },
    {
        id: 6,
        name: 'Real Estate Analytical Website',
        description: "Designed and developed an analytics-driven real estate website to evaluate home values based on size and market trends. Employed JavaScript and Node.js for server-side logic, while CSS and HTML were used to create an intuitive and user-friendly interface.",
        tools: ['Python', 'SQL', 'HTML', 'CSS', 'JavaScript', 'AI Integration', 'Health Technology', 'User Interface Design', 'Data Security'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Lead Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },