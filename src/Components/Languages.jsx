import React from "react";

const Languages = () => {
  return (
    <div>
      <h1>Languages</h1>
      <div>
        <div style={{display:'flex'}}>
          <div style={{textAlign:'center'}}>
            <div class="progress-circle over50 p90">
              <span>90%</span>

              <div class="left-half-clipper">
                <div class="first50-bar"></div>
                <div class="value-bar"></div>
              </div>
            </div>
            <h2 style={{color:'white'}}>English</h2>
          </div>
          <div style={{textAlign:'center'}}>
            <div class="progress-circle over50 p95">
              <span>95%</span>

              <div class="left-half-clipper">
                <div class="first50-bar"></div>
                <div class="value-bar"></div>
              </div>
            </div>
            <h2 style={{color:'white'}}>Spanish</h2>
          </div>
          <div style={{textAlign:'center'}} >
            <div class="progress-circle over50 p85">
              <span>85%</span>

              <div class="left-half-clipper">
                <div class="first50-bar"></div>
                <div class="value-bar"></div>
              </div>
            </div>
            <h2 style={{color:'white'}}>French</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Languages;
