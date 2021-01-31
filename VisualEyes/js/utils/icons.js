const OPEN_APP_TIP = "View the results in VisualEyes web app where more options are available.";

function getOriginalIcon() {
  return `
    <div style= "display: flex; justify-content: center; align-items: center; cursor: pointer; padding-right: 20px;">
    <svg
    width="32"
    viewBox="0 0 57 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    >
    <circle
    id="originalCircle"
    cx="28.5"
    cy="28"
    r="28"
    fill= "#3E21DE"
    
    />
    <path
    id="originalPath"
    fill-rule="evenodd"
    clipRule="evenodd"
    d="M17.5 28C17.5 21.9243 22.4243 17 28.5 17C34.5757 17 39.5 21.9243 39.5 28C39.5 28.8987 39.3923 29.7722 39.189 30.6083L35.4832 26.9024C34.572 25.9912 33.094 25.9902 32.1827 26.9033L27.1668 31.9193L26.1497 30.9022C25.2385 29.991 23.761 29.9895 22.8497 30.9025L19.4694 34.2829C18.2279 32.5018 17.5 30.336 17.5 28ZM20.7621 35.8186C22.7493 37.7855 25.4827 39 28.5 39C29.3986 39 30.2721 38.8923 31.1081 38.689L26.4678 34.0487C26.465 34.046 26.4623 34.0434 26.4596 34.0407C26.4569 34.038 26.4543 34.0353 26.4516 34.0325L24.7354 32.3164C24.6041 32.1851 24.394 32.1864 24.2652 32.3155L20.7621 35.8186ZM28.581 33.3335L33.1972 37.9497C35.4985 36.8616 37.3615 34.9986 38.4497 32.6974L34.069 28.3167C33.9377 28.1853 33.7275 28.1867 33.5988 28.3158L28.581 33.3335ZM28.5 15C21.3197 15 15.5 20.8197 15.5 28C15.5 35.1803 21.3197 41 28.5 41C35.6803 41 41.5 35.1803 41.5 28C41.5 20.8197 35.6803 15 28.5 15ZM26.4142 25.9142C27.1953 25.1332 27.1953 23.8668 26.4142 23.0858C25.6332 22.3047 24.3668 22.3047 23.5858 23.0858C22.8047 23.8668 22.8047 25.1332 23.5858 25.9142C24.3668 26.6953 25.6332 26.6953 26.4142 25.9142Z"
    fill="white"
    />
    </svg>
   Original
    </div>
    `;
}

function getClarityIcon() {
  return `
    <div style= "display: flex; justify-content: center; align-items: center; cursor: pointer; padding-left: 20px;">
    <svg
    width="32"
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    >
    <circle
      id="clarityCircle"
      cx="28"
      cy="28"
      r="28"
      fill="rgba(29, 15, 104, 0.05)"
      />
    <g>
      <path
        id="clarityPath"
        d="M34.4593 17.3972C34.4214 17.3566 34.3684 17.3335 34.3129 17.3335H21.775C21.7204 17.3335 21.6682 17.3558 21.6305 17.3953L15.3267 23.9888C15.255 24.0638 15.2526 24.1812 15.3212 24.2591L27.8502 38.4967C27.9297 38.587 28.0704 38.5872 28.1501 38.4971L40.6796 24.3379C40.7479 24.2607 40.7464 24.1444 40.6761 24.069L34.4593 17.3972ZM21.8268 25.0911C21.905 25.0911 21.976 25.1366 22.0086 25.2077L24.8345 31.3722C24.9305 31.5816 24.6547 31.7606 24.5026 31.5877L19.0773 25.4232C18.9636 25.294 19.0554 25.0911 19.2275 25.0911H21.8268ZM31.4216 25.0911C31.5673 25.0911 31.6641 25.2419 31.6034 25.3744L28.1818 32.8398C28.1105 32.9954 27.8894 32.9954 27.8181 32.8398L24.3965 25.3744C24.3358 25.2419 24.4326 25.0911 24.5783 25.0911H31.4216ZM25.3986 23.1517C25.2246 23.1517 25.1336 22.9448 25.2512 22.8165L27.8525 19.9787C27.9318 19.8922 28.0681 19.8922 28.1474 19.9787L30.7487 22.8165C30.8663 22.9448 30.7753 23.1517 30.6013 23.1517H25.3986ZM33.9913 25.2077C34.0239 25.1366 34.0949 25.0911 34.1731 25.0911H36.8306C37.003 25.0911 37.0946 25.2945 36.9804 25.4236L31.4661 31.6557C31.3137 31.828 31.0387 31.6489 31.1345 31.4398L33.9913 25.2077ZM36.7117 22.8153C36.8308 22.9432 36.7401 23.1517 36.5653 23.1517H33.9215C33.8655 23.1517 33.812 23.1282 33.7741 23.0868L30.5846 19.608C30.467 19.4798 30.558 19.2729 30.732 19.2729H33.3241C33.3796 19.2729 33.4326 19.2959 33.4705 19.3366L36.7117 22.8153ZM22.6033 19.3347C22.641 19.2952 22.6932 19.2729 22.7478 19.2729H25.2679C25.4419 19.2729 25.5329 19.4798 25.4153 19.608L22.2258 23.0868C22.1879 23.1282 22.1344 23.1517 22.0784 23.1517H19.4225C19.2465 23.1517 19.1563 22.9407 19.2779 22.8135L22.6033 19.3347Z"
        fill= "rgba(29, 15, 104, 1)"
      />
    </g>
    </svg>
   Clarity
    </div>
    `;
}

function getAttentionIcon() {
  return `
   <div style= "display: flex; justify-content: center; align-items: center; cursor: pointer; padding: 0 20px;">
   <svg
  width="32"
  viewBox="0 0 56 56"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <circle
    id="attentionCircle"
    cx="28"
    cy="28"
    r="28"
    fill="rgba(29, 15, 104, 0.05)"
  />
  <path
    id="attentionPath"
    fill-rule="evenodd"
    clipRule="evenodd"
    d="M23.5725 16.1567C24.693 16.1745 29.221 18.6724 30.066 24.6029C30.9863 23.7255 31.4987 20.9868 31.2323 19.8232C35.2509 22.7534 37.3334 26.5156 37.3334 30.713C37.3334 35.7404 33.8456 39.8431 28.2194 39.8431C22.395 39.8431 19.0303 36.1391 19.0303 31.6752C19.0303 25.4971 24.1673 24.1548 23.5725 16.1567ZM26.8894 35.6417C26.1278 36.4786 26.5152 37.5613 27.6653 37.66C28.7177 37.7518 29.4539 36.8586 29.7315 35.8914C30.0091 34.9262 29.823 33.8978 29.3563 33.0362C28.3415 34.5314 27.8107 34.6548 26.8894 35.6417ZM31.3838 37.2287C33.9158 36.0977 35.3007 33.5938 35.3007 30.7347C35.3007 28.4075 34.3449 25.8227 32.7586 23.7867C32.0031 26.6162 29.7854 27.7127 28.1818 27.9999C28.2327 24.823 27.8585 21.9273 25.536 19.6722C25.235 24.3423 21.1422 27.2025 21.0639 31.6279C21.0345 33.1191 21.5866 34.789 22.8231 35.9852C23.3223 36.4678 23.8948 36.8448 24.5151 37.13C24.3921 36.53 24.4521 35.8924 24.7134 35.3062C25.6397 33.2277 28.1025 33.0155 28.9861 29.6274C29.9542 30.3666 32.3163 33.0846 31.8109 35.9023C31.7275 36.3651 31.5831 36.8132 31.3838 37.2287Z"
    fill= "rgba(29, 15, 104, 1)"
  />
</svg>
   Attention
</div>
   `;
}

function getMinusIcon() {
  return `
  <svg width="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M19 13H5C4.448 13 4 12.553 4 12C4 11.447 4.448 11 5 11H19C19.553 11 20 11.447 20 12C20 12.553 19.553 13 19 13Z" fill="rgba(62, 33, 222, 1)"></path>
  </svg>
  `;
}

function getPlusIcon() {
  return `
  <svg width="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin: 0px;">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M19 11H13V5C13 4.447 12.552 4 12 4C11.448 4 11 4.447 11 5V11H5C4.448 11 4 11.447 4 12C4 12.553 4.448 13 5 13H11V19C11 19.553 11.448 20 12 20C12.552 20 13 19.553 13 19V13H19C19.552 13 20 12.553 20 12C20 11.447 19.552 11 19 11" fill="rgba(62, 33, 222, 1)"></path>  </svg>
  `;
}
function getViewResultsIcon() {

  
  return `
  <span class="tooltiptext-top" style="width: 300px;">${OPEN_APP_TIP}</span>
  <div class="viewDashboardBtn" id="viewresults" style= "display: flex; justify-content: center; align-items:center; cursor: pointer; height:46px;">
  <svg width="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right: 0.5rem;">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M19.5 18.112V12.112C19.5 11.56 19.947 11.112 20.5 11.112C21.053 11.112 21.5 11.56 21.5 12.112V18.112C21.5 19.766 20.154 21.112 18.5 21.112H6.5C4.846 21.112 3.5 19.766 3.5 18.112V6.112C3.5 4.458 4.846 3.112 6.5 3.112H12.5C13.053 3.112 13.5 3.56 13.5 4.112C13.5 4.664 13.053 5.112 12.5 5.112H6.5C5.948 5.112 5.5 5.561 5.5 6.112V18.112C5.5 18.663 5.948 19.112 6.5 19.112H18.5C19.052 19.112 19.5 18.663 19.5 18.112ZM18.0781 5.12L16.4951 5.112C15.9421 5.109 15.4971 4.659 15.5001 4.107C15.5031 3.556 15.9501 3.112 16.5001 3.112H16.5051L20.5021 3.132C21.0521 3.135 21.4971 3.581 21.4971 4.131L21.5001 8.111C21.5001 8.664 21.0531 9.112 20.5011 9.112H20.5001C19.9481 9.112 19.5001 8.665 19.5001 8.113L19.4991 6.527L13.2071 12.819C13.0121 13.014 12.7561 13.112 12.5001 13.112C12.2441 13.112 11.9881 13.014 11.7931 12.819C11.4021 12.428 11.4021 11.796 11.7931 11.405L18.0781 5.12Z" fill="#231F20"></path>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M19.5 18.112V12.112C19.5 11.56 19.947 11.112 20.5 11.112C21.053 11.112 21.5 11.56 21.5 12.112V18.112C21.5 19.766 20.154 21.112 18.5 21.112H6.5C4.846 21.112 3.5 19.766 3.5 18.112V6.112C3.5 4.458 4.846 3.112 6.5 3.112H12.5C13.053 3.112 13.5 3.56 13.5 4.112C13.5 4.664 13.053 5.112 12.5 5.112H6.5C5.948 5.112 5.5 5.561 5.5 6.112V18.112C5.5 18.663 5.948 19.112 6.5 19.112H18.5C19.052 19.112 19.5 18.663 19.5 18.112ZM18.0781 5.12L16.4951 5.112C15.9421 5.109 15.4971 4.659 15.5001 4.107C15.5031 3.556 15.9501 3.112 16.5001 3.112H16.5051L20.5021 3.132C21.0521 3.135 21.4971 3.581 21.4971 4.131L21.5001 8.111C21.5001 8.664 21.0531 9.112 20.5011 9.112H20.5001C19.9481 9.112 19.5001 8.665 19.5001 8.113L19.4991 6.527L13.2071 12.819C13.0121 13.014 12.7561 13.112 12.5001 13.112C12.2441 13.112 11.9881 13.014 11.7931 12.819C11.4021 12.428 11.4021 11.796 11.7931 11.405L18.0781 5.12Z" fill="white"></path></mask>
  </svg>
  Open VisualEyes App
  </div>
 `;
}

function getHelpToolTipIcon() {
  return `
<span class="tooltip">
<span id="helptext" class="tooltiptext"></span>
<div id="help">
<svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z" fill="#212121"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20 12C22.757 12 25 14.243 25 17C25 19.414 23.279 21.435 21 21.898V23C21 23.553 20.553 24 20 24C19.447 24 19 23.553 19 23V21C19 20.447 19.447 20 20 20C21.654 20 23 18.654 23 17C23 15.346 21.654 14 20 14C18.346 14 17 15.346 17 17C17 17.553 16.553 18 16 18C15.447 18 15 17.553 15 17C15 14.243 17.243 12 20 12ZM19 27C19 26.447 19.447 26 20 26C20.553 26 21 26.447 21 27C21 27.553 20.553 28 20 28C19.447 28 19 27.553 19 27Z" fill="white"/>
</svg>
</div>
</span>
  `;
}
module.exports = {
  getOriginalIcon,
  getClarityIcon,
  getAttentionIcon,
  getMinusIcon,
  getPlusIcon,
  getViewResultsIcon,
  getHelpToolTipIcon
};