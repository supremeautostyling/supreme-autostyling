import React from "react";
import { withRouter } from "react-router-dom";
import packages from "./packages.js";
import "./PackagePage.css";

function PkgHeader(props) {
  return (
    <div>
      <div className="d-flex">
        <div className="mr-auto">
          <h1>{props.name}</h1>
        </div>

        <div>
          <h3>${props.alaPrice}</h3>
        </div>
      </div>

      <p>{props.description}</p>
    </div>
  );
}

function PkgInterior(props) {
  const { interior, intProtection } = props;
  return (
    <div>
      {interior.length > 0 && (
        <div>
          <h4>Interior</h4>
          <ul>
            {interior.map((item, idx) => (
              <li key={"int" + idx}>{item}</li>
            ))}
          </ul>
        </div>
      )}
      {intProtection.length > 0 && (
        <div>
          <h4>Protection</h4>
          <ul>
            {intProtection.map((item, idx) => (
              <li key={"intProt" + idx}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function PkgExterior(props) {
  const { exterior, extProtection } = props;
  return (
    <div>
      {exterior.length > 0 && (
        <div>
          <h4>Exterior</h4>
          <ul>
            {exterior.map((item, idx) => (
              <li key={"ext" + idx}>{item}</li>
            ))}
          </ul>
        </div>
      )}
      {extProtection.length > 0 && (
        <div>
          <h4>Protection</h4>
          <ul>
            {extProtection.map((item, idx) => (
              <li key={"extProt" + idx}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function PackagePage(props) {
  const {
    name,
    alaPrice,
    description,
    interior,
    intProtection,
    exterior,
    extProtection,
  } = packages[props.match.params.pkg];
  return (
    <main className="package-main">
      <section className="service-package-page">
        <PkgHeader name={name} alaPrice={alaPrice} description={description} />
        <PkgInterior interior={interior} intProtection={intProtection} />
        <PkgExterior exterior={exterior} extProtection={extProtection} />
      </section>
    </main>
  );
}

export default withRouter(PackagePage);
