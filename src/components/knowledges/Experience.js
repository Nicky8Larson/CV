import React from "react";

const Experience = () => {
  return (
    <div className="experience">
      <h3>Expériences</h3>
      <div className="exp-1">
        <h4>Développeur Full Stack - Tempo One (Alternance)</h4>
        <h5>Août. 2021 - Actuellement</h5>
        <p>
          L'entreprise Tempo One est un partenaire qui propose des solutions
          dans le transport et la logistique et qui va accompagner le client
          dans une démarche de partenariat.
        </p>
        <p>
          Mon rôle est de développer des applications web internes selon les
          besoins.
        </p>
        <p>
          Technologies utilisées : Typescript, VueJS, Vuetify, NodeJS,
          ExpressJS, Prisma, PostgreSQL, MySQL et Git.
        </p>
      </div>
      <div className="exp-2">
        <h4>Testeur Web - L3M Holding (Stage)</h4>
        <h5>Janv. 2021 - Fev. 2021</h5>
        <p>
          Ma mission était d’assurer un travail de préparation, de détecter des
          anomalies, d’analyser, de rédiger des rapports ainsi que de planifier
          des opérations.
        </p>
        <p>
          Technologies utilisées : Selenium, Java, Jira Software, Excel, Github
          et Shopify
        </p>
      </div>
      <div className="exp-3">
        <h4>Groupe Etic (Intérim)</h4>
        <h5>Juin 2021</h5>
        <p>
          Distribution de prospectus et accessoires ; préparation de l’évenement
          « La fête des terrasses » dans la région PACA.
        </p>
        <h5>Juillet 2021</h5>
        <p>
          Téléconseiller chez Alta Etic ; prise d'appel pour plusieurs
          concessions de la région PACA (Service standard).
        </p>
      </div>
    </div>
  );
};

export default Experience;
