const chartistSvg = require('svg-chartist');
const fs = require('fs');

const data = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
let totalRecords = data.labels.length;

const options = {
  fullWidth: true,
  chartPadding: {
    right: 40
  },
  showArea: true,
  axisX: {
    labelInterpolationFnc: function(value, index) {
      value = value.replace(" ", "")
      if(totalRecords > 80) {
        return index % 5 === 0 ? value : null;
      }
      if(totalRecords > 60) {
        return index % 4 === 0 ? value : null;
      }
      if(totalRecords > 30) {
        return index % 3 === 0 ? value : null;
      }
      if(totalRecords > 20) {
        return index % 2 === 0 ? value : null;
      }
      return index % 2 === 0 ? value : null;
    }
  }
}

const opts = {
  options: options
}

chartistSvg('line', data, opts).then((html) => {
  html = html.replace('<svg', '<svg xmlns="http://www.w3.org/2000/svg" ')

  html = `
  <svg style="background-color: white" width="1200" height="650" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <svg x="470" y="620" width="249" height="24" viewBox="0 0 249 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M42.976 15.712H41.344V17.44H32.752V15.808H31.024V7.192H32.656V5.488H41.272V7.12H42.976V15.712ZM39.544 15.712V7.192H34.456V15.712H39.544ZM56.1713 12.28H54.5393V14.008H47.6993V17.44H44.2193V5.488H54.4673V7.12H56.1713V12.28ZM52.7393 12.28V7.192H47.6513V12.28H52.7393ZM69.5826 17.344H57.4866V5.272H69.5826V6.952H60.9666V10.384H66.1266V12.16H60.9666V15.592H69.5826V17.344ZM82.5619 17.44H79.1779V15.808H77.4739V14.08H75.7699V12.328H74.0899V17.44H70.6099V5.488H73.9939V7.12H75.7219V8.824H77.4259V10.576H79.1059V5.488H82.5619V17.44ZM98.8276 15.712H97.1956V17.44H88.6036V15.808H86.8756V14.056H90.2596V15.712H95.4196V12.376H88.6036V10.648H86.8756V7.192H88.5076V5.488H95.3956V7.12H97.1236V8.848H93.7396V7.192H90.3076V10.528H97.1236V12.256H98.8276V15.712ZM112.023 15.712H110.391V17.44H101.799V15.808H100.071V7.192H101.703V5.488H110.319V7.12H112.023V15.712ZM108.591 15.712V7.192H103.503V15.712H108.591ZM125.218 15.712H123.586V17.44H114.994V15.808H113.266V5.488H116.65V15.712H121.762V5.488H125.218V15.712ZM138.414 12.28H135.03V13.96H136.71V15.688H138.414V17.44H133.326V15.808H131.622V14.032H129.942V17.44H126.462V5.488H136.71V7.12H138.414V12.28ZM134.982 10.576V7.192H129.894V12.28H133.35V10.576H134.982ZM151.609 8.848H148.225V7.192H144.841V8.848H143.089V13.96H144.769V15.712H148.153V14.056H151.609V15.712H149.977V17.44H143.089V15.808H141.385V14.08H139.657V8.896H141.289V7.192H143.017V5.488H149.905V7.12H151.609V8.848ZM165.02 17.344H152.924V5.272H165.02V6.952H156.404V10.384H161.564V12.16H156.404V15.592H165.02V17.344ZM181.07 17.44H177.686V12.328H172.598V17.44H169.118V5.488H172.502V10.576H177.614V5.488H181.07V17.44ZM194.481 17.344H182.385V5.272H194.481V6.952H185.865V10.384H191.025V12.16H185.865V15.592H194.481V17.344ZM207.46 12.28H204.076V13.96H205.756V15.688H207.46V17.44H202.372V15.808H200.668V14.032H198.988V17.44H195.508V5.488H205.756V7.12H207.46V12.28ZM204.028 10.576V7.192H198.94V12.28H202.396V10.576H204.028ZM220.656 15.712H219.024V17.44H210.432V15.808H208.704V7.192H210.336V5.488H218.952V7.12H220.656V15.712ZM217.224 15.712V7.192H212.136V15.712H217.224ZM234.067 17.344H221.971V5.272H234.067V6.952H225.451V10.384H230.611V12.16H225.451V15.592H234.067V17.344ZM247.046 15.712H245.414V17.44H236.822V15.808H235.094V14.056H238.478V15.712H243.638V12.376H236.822V10.648H235.094V7.192H236.726V5.488H243.614V7.12H245.342V8.848H241.958V7.192H238.526V10.528H245.342V12.256H247.046V15.712Z" fill="black"/>
      <rect x="8" y="15" width="8" height="6" fill="black"/>
      <rect x="7" y="21" width="10" height="2" fill="black"/>
      <rect x="7" y="23" width="10" height="1" fill="black"/>
      <rect width="10" height="1" transform="matrix(1 0 0 -1 7 16)" fill="black"/>
      <rect width="12" height="1" transform="matrix(1 0 0 -1 6 15)" fill="black"/>
      <rect width="22" height="1" transform="matrix(1 0 0 -1 1 12)" fill="black"/>
      <rect width="20" height="1" transform="matrix(1 0 0 -1 2 13)" fill="black"/>
      <rect width="24" height="9" transform="matrix(1 0 0 -1 0 11)" fill="black"/>
      <rect width="22" height="1" transform="matrix(1 0 0 -1 1 2)" fill="black"/>
      <rect width="14" height="1" transform="matrix(1 0 0 -1 5 1)" fill="black"/>
      <rect width="18" height="1" transform="matrix(1 0 0 -1 3 14)" fill="black"/>
      <rect x="9" y="2" width="6" height="17" fill="#E1B437"/>
      <rect width="1" height="12" transform="matrix(-1 0 0 1 16 2)" fill="#E1B437"/>
      <rect x="4" y="3" width="16" height="8" fill="#E1B437"/>
      <rect x="5" y="1" width="14" height="2" fill="#FAF492"/>
      <rect x="1" y="2" width="4" height="1" fill="#E1B437"/>
      <rect x="1" y="2" width="2" height="7" fill="#E1B437"/>
      <rect x="21" y="2" width="2" height="7" fill="#E1B437"/>
      <rect x="3" y="11" width="18" height="1" fill="#E1B437"/>
      <rect x="9" y="21" width="6" height="2" fill="#E1B437"/>
      <rect x="8" y="11" width="8" height="2" fill="#E1B437"/>
      <rect x="16" y="1" width="2" height="8" fill="#FAF492"/>
      <rect x="14" y="9" width="2" height="2" fill="#FAF492"/>
      <rect x="14" y="21" width="2" height="2" fill="#FAF492"/>
      <rect x="20" y="2" width="1" height="2" fill="#D37D34"/>
      <rect x="3" y="2" width="1" height="2" fill="#D37D34"/>
      <rect x="1" y="9" width="2" height="2" fill="#D37D34"/>
      <rect x="3" y="11" width="5" height="2" fill="#D37D34"/>
      <rect x="7" y="13" width="4" height="2" fill="#D37D34"/>
      <rect x="13" y="13" width="4" height="2" fill="#D37D34"/>
      <rect x="21" y="9" width="2" height="2" fill="#D37D34"/>
      <rect x="16" y="11" width="5" height="2" fill="#D37D34"/>
      <rect x="9" y="15" width="6" height="2" fill="#D37D34"/>
      <rect x="8" y="21" width="2" height="2" fill="#FAF492"/>
      <rect x="9" y="19" width="6" height="2" fill="#FAF492"/>
      <rect x="13" y="17" width="2" height="2" fill="#FAF492"/>
      <rect x="4" y="2" width="16" height="1" fill="#FAF492"/>
    </svg>
    ${html}
  </svg>
  `

  console.log(html)
})
