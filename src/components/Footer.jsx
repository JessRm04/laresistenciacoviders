import React from 'react';
import '../css/trackerdos.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/footer.css';

function footer() {
  return (
    <>
      <footer className="pie-de-pagina">
        <div className="container-1">
          <div className="row">
            <div className="col-md-4">
              <p className="h6"><i class="fa-solid fa-virus-covid"></i><b> COVIMAP</b></p>
              <p className="text-secondary">These droplets can land on objects and surfaces around the person such as tables, doorknobs and handrails.</p>
              <div className="col-sm">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-linkedin"></i>
                <i className="fa-brands fa-square-youtube"></i>
              </div>

            </div>
            <div className="col-sm">
              <p className="h6"> Quic Links</p>
              <p className="text-secondary">Preventions</p>
              <p className="text-secondary">Qurantine</p>
              <p className="text-secondary">About</p>
              <p className="text-secondary">Help</p>

            </div>
            <div className="col-sm">
              <p className="h6"> About </p>
              <p className="text-secondary">Hand Wash</p>
              <p className="text-secondary">Social Distance</p>
              <p className="text-secondary">Isolate</p>
              <p className="text-secondary">Difference</p>

            </div>

            <div className="col-sm">
              <p className="h6"> About </p>
              <p className="text-secondary">Hand Wash</p>
              <p className="text-secondary">Social Distance</p>
              <p className="text-secondary">Isolate</p>
              <p className="text-secondary">Difference</p>

            </div>

            <div className="col-sm">
              <p className="h6"> Help</p>
              <p className="text-secondary">Hand Wash</p>
              <p className="text-secondary">Social Distance</p>
              <p className="text-secondary">Isolate</p>
              <p className="text-secondary">Difference</p>

            </div>


          </div>
        </div>
        <hr />
        <div className="piepag d-flex justify-content-between">
          <div>
            <p className="text-secondary">© Copyright 2020. All Rights Reserved</p>
          </div>
          <div>
            <p>Design by <b>DesignZone</b></p>
          </div>
        </div>

      </footer>
    </>
  )
}

export default footer;