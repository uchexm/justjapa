"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function JoinWaitlist() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error" | "submitting">("idle");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    
    setStatus("submitting");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "waitlist-section" }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
        // Redirect to success page after a brief delay
        setTimeout(() => {
          router.push("/success");
        }, 1500);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="waitlist" className="relative py-16 sm:py-20 overflow-hidden bg-white">
      <div className="container-consistent">
        {/* Main layout container responsive */}
        <div className="relative bg-gray-100 rounded-3xl min-h-[500px] sm:min-h-[589px] p-6 sm:p-8 lg:p-12">
        {/* Background with gradient and border radius */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(270deg, #0F6AFF 0%, #0053DB 100%)',
            borderRadius: '25px',
            opacity: '0.03'
          }}
        ></div>

        {/* Decorative Icons */}
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 1419 375" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Star icon - top left */}
          <path opacity="0.12" d="M35.5393 201.777L30.7116 199.413C30.0403 199.084 29.499 198.566 29.1557 197.923L27.0742 194.027C26.5941 193.128 26.9931 191.978 27.9654 191.459L34.1507 188.155C35.9196 187.21 35.4402 184.714 33.4773 184.649L24.0239 184.334C22.6766 184.289 21.494 183.58 20.8945 182.458L18.925 178.77C18.1444 177.309 16.3268 176.757 14.8654 177.538L13.1154 178.473C11.6539 179.253 11.102 181.071 11.8827 182.532L13.8522 186.219C14.4517 187.342 14.3834 188.719 13.6716 189.864L8.67701 197.896C7.63994 199.564 9.44779 201.35 11.2166 200.405L17.4019 197.101C18.3743 196.582 19.5517 196.889 20.0318 197.788L22.1134 201.685C22.4567 202.328 22.5865 203.066 22.4865 203.807L21.7672 209.134C21.5075 211.057 24.0631 211.898 25.2792 210.289L27.5831 207.241C28.3296 206.254 29.4964 205.63 30.7325 205.559L34.5468 205.339C36.5603 205.223 37.2825 202.631 35.5393 201.777Z" stroke="#0178FF" strokeWidth="3"/>
          
          {/* Star icon - top right */}
          <path opacity="0.12" d="M1383.46 224.848L1388.29 222.484C1388.96 222.155 1389.5 221.637 1389.84 220.994L1391.93 217.098C1392.41 216.199 1392.01 215.049 1391.03 214.53L1384.85 211.226C1383.08 210.281 1383.56 207.785 1385.52 207.72L1394.98 207.405C1396.32 207.36 1397.51 206.651 1398.11 205.529L1400.07 201.842C1400.86 200.38 1402.67 199.828 1404.13 200.609L1405.88 201.544C1407.35 202.324 1407.9 204.142 1407.12 205.603L1405.15 209.29C1404.55 210.413 1404.62 211.79 1405.33 212.935L1410.32 220.967C1411.36 222.635 1409.55 224.421 1407.78 223.476L1401.6 220.172C1400.63 219.653 1399.45 219.96 1398.97 220.859L1396.89 224.756C1396.54 225.399 1396.41 226.137 1396.51 226.878L1397.23 232.205C1397.49 234.128 1394.94 234.969 1393.72 233.36L1391.42 230.312C1390.67 229.325 1389.5 228.701 1388.27 228.63L1384.45 228.41C1382.44 228.294 1381.72 225.702 1383.46 224.848Z" stroke="#0178FF" strokeWidth="3"/>
          
          {/* Small star icon - middle right */}
          <path opacity="0.12" d="M1289.39 149.337L1291.98 150.602C1292.34 150.778 1292.63 151.055 1292.81 151.399L1293.92 153.484C1294.18 153.965 1293.97 154.58 1293.45 154.858L1290.14 156.625C1289.19 157.131 1289.45 158.466 1290.5 158.501L1295.55 158.669C1296.28 158.693 1296.91 159.072 1297.23 159.673L1298.03 161.177C1298.59 162.218 1299.88 162.61 1300.92 162.055C1301.96 161.499 1302.36 160.205 1301.8 159.165L1301 157.66C1300.68 157.06 1300.71 156.323 1301.09 155.711L1303.76 151.414C1304.32 150.521 1303.35 149.566 1302.41 150.071L1299.1 151.839C1298.58 152.117 1297.95 151.952 1297.69 151.471L1296.58 149.387C1296.39 149.043 1296.32 148.648 1296.38 148.252L1296.76 145.402C1296.9 144.373 1295.53 143.923 1294.88 144.784L1293.65 146.414C1293.25 146.943 1292.63 147.276 1291.97 147.314L1289.92 147.432C1288.85 147.494 1288.46 148.881 1289.39 149.337Z" stroke="#0178FF"/>

          {/* Additional detailed star icon - center left */}
          <g opacity="0.3" transform="translate(200, 180)">
            <path d="M15.6062 6.26628L13.0234 7.53108C12.6644 7.70693 12.3748 7.98421 12.1911 8.32799L11.0775 10.4127C10.8207 10.8936 11.0342 11.5086 11.5543 11.7865L14.8633 13.554C15.8096 14.0595 15.5531 15.3946 14.503 15.4296L9.44572 15.5981C8.72498 15.6221 8.09232 16.0014 7.77162 16.6018L6.96801 18.1062C6.4123 19.1465 5.11843 19.5394 4.07808 18.9837C3.03772 18.428 2.64485 17.1341 3.20056 16.0938L4.00417 14.5893C4.32487 13.989 4.28836 13.2522 3.90757 12.6398L1.23558 8.34267C0.680778 7.45042 1.64793 6.49488 2.59421 7.00035L5.90316 8.76786C6.42334 9.04571 7.05324 8.88116 7.31009 8.40031L8.42367 6.31558C8.6073 5.9718 8.67675 5.57691 8.62325 5.18068L8.23845 2.33076C8.09951 1.30171 9.46669 0.851941 10.1173 1.71267L11.3498 3.34324C11.7492 3.87163 12.3734 4.20506 13.0346 4.24322L15.0752 4.36099C16.1524 4.42316 16.5387 5.80959 15.6062 6.26628Z" stroke="#0178FF" strokeWidth="2"/>
          </g>

          {/* Additional detailed star icon - center right */}
          <g opacity="0.3" transform="translate(1200, 300) scale(0.8)">
            <path d="M15.6062 6.26628L13.0234 7.53108C12.6644 7.70693 12.3748 7.98421 12.1911 8.32799L11.0775 10.4127C10.8207 10.8936 11.0342 11.5086 11.5543 11.7865L14.8633 13.554C15.8096 14.0595 15.5531 15.3946 14.503 15.4296L9.44572 15.5981C8.72498 15.6221 8.09232 16.0014 7.77162 16.6018L6.96801 18.1062C6.4123 19.1465 5.11843 19.5394 4.07808 18.9837C3.03772 18.428 2.64485 17.1341 3.20056 16.0938L4.00417 14.5893C4.32487 13.989 4.28836 13.2522 3.90757 12.6398L1.23558 8.34267C0.680778 7.45042 1.64793 6.49488 2.59421 7.00035L5.90316 8.76786C6.42334 9.04571 7.05324 8.88116 7.31009 8.40031L8.42367 6.31558C8.6073 5.9718 8.67675 5.57691 8.62325 5.18068L8.23845 2.33076C8.09951 1.30171 9.46669 0.851941 10.1173 1.71267L11.3498 3.34324C11.7492 3.87163 12.3734 4.20506 13.0346 4.24322L15.0752 4.36099C16.1524 4.42316 16.5387 5.80959 15.6062 6.26628Z" stroke="#0178FF" strokeWidth="2"/>
          </g>

          {/* Phone icons - top left */}
          <g opacity="0.12">
            <path d="M75.3339 35.2964C74.0251 32.7108 75.0612 29.5532 77.6481 28.2437C80.2351 26.9342 83.3932 27.9687 84.702 30.5543L87.8618 36.7965L78.4936 41.5386L75.3339 35.2964Z" stroke="#0178FF" strokeWidth="3"/>
            <path d="M56.505 25.2235C55.6324 23.4998 56.3232 21.3947 58.0478 20.5217L61.6365 18.7051C62.3456 18.3462 62.9115 17.7567 63.241 17.0337L66.2177 10.5039C66.8966 9.01473 68.5172 8.19442 70.1192 8.52902L77.1439 9.99615C77.9217 10.1586 78.7318 10.0515 79.4409 9.69262L83.0296 7.87604C84.7542 7.00304 86.8596 7.69269 87.7322 9.41641L97.2114 28.1429C98.084 29.8666 97.3932 31.9717 95.6686 32.8447L70.6868 45.4904C68.9622 46.3634 66.8568 45.6737 65.9842 43.95L56.505 25.2235Z" stroke="#0178FF" strokeWidth="3"/>
            <path d="M76.8212 18.8603C75.9486 17.1366 73.8432 16.4469 72.1186 17.3199C70.3939 18.1929 69.7032 20.298 70.5757 22.0217C71.4483 23.7455 73.5537 24.4351 75.2783 23.5621C77.003 22.6891 77.6937 20.5841 76.8212 18.8603Z" stroke="#0178FF" strokeWidth="3"/>
          </g>

          {/* Phone icons - top right */}
          <g opacity="0.12">
            <path d="M1343.67 58.3675C1344.97 55.7819 1343.94 52.6243 1341.35 51.3148C1338.76 50.0053 1335.61 51.0398 1334.3 53.6253L1331.14 59.8675L1340.51 64.6096L1343.67 58.3675Z" stroke="#0178FF" strokeWidth="3"/>
            <path d="M1362.49 48.2945C1363.37 46.5708 1362.68 44.4657 1360.95 43.5927L1357.36 41.7762C1356.65 41.4172 1356.09 40.8278 1355.76 40.1048L1352.78 33.575C1352.1 32.0858 1350.48 31.2655 1348.88 31.6001L1341.86 33.0672C1341.08 33.2296 1340.27 33.1226 1339.56 32.7637L1335.97 30.9471C1334.25 30.0741 1332.14 30.7637 1331.27 32.4875L1321.79 51.214C1320.92 52.9377 1321.61 55.0427 1323.33 55.9157L1348.31 68.5614C1350.04 69.4344 1352.14 68.7447 1353.02 67.021L1362.49 48.2945Z" stroke="#0178FF" strokeWidth="3"/>
            <path d="M1342.18 41.9314C1343.05 40.2076 1345.16 39.518 1346.88 40.391C1348.61 41.264 1349.3 43.3691 1348.42 45.0928C1347.55 46.8165 1345.45 47.5062 1343.72 46.6332C1342 45.7602 1341.31 43.6551 1342.18 41.9314Z" stroke="#0178FF" strokeWidth="3"/>
          </g>

          {/* Small phone icons - middle left */}
          <g opacity="0.12">
            <path d="M150.895 215.329C150.195 216.712 150.749 218.401 152.133 219.102C153.517 219.803 155.207 219.249 155.907 217.866L157.597 214.527L152.586 211.99L150.895 215.329Z" stroke="#0178FF"/>
            <path d="M140.822 220.718C140.355 221.64 140.725 222.766 141.648 223.233L143.567 224.205C143.947 224.397 144.249 224.712 144.426 225.099L146.018 228.592C146.381 229.389 147.248 229.828 148.105 229.649L151.863 228.864C152.28 228.777 152.713 228.834 153.092 229.026L155.012 229.998C155.935 230.465 157.061 230.096 157.528 229.174L162.599 219.156C163.066 218.234 162.696 217.108 161.774 216.641L148.409 209.876C147.486 209.409 146.36 209.777 145.893 210.7L140.822 220.718Z" stroke="#0178FF"/>
            <path d="M151.691 224.122C151.224 225.044 150.098 225.413 149.175 224.946C148.252 224.479 147.883 223.353 148.35 222.431C148.816 221.508 149.943 221.14 150.865 221.607C151.788 222.074 152.158 223.2 151.691 224.122Z" stroke="#0178FF"/>
          </g>

          {/* Small phone icons - middle right */}
          <g opacity="0.12">
            <path d="M1268.1 238.4C1268.81 239.783 1268.25 241.473 1266.87 242.173C1265.48 242.874 1263.79 242.32 1263.09 240.937L1261.4 237.598L1266.41 235.061L1268.1 238.4Z" stroke="#0178FF"/>
            <path d="M1278.18 243.789C1278.64 244.711 1278.28 245.837 1277.35 246.304L1275.43 247.276C1275.05 247.468 1274.75 247.783 1274.57 248.17L1272.98 251.663C1272.62 252.46 1271.75 252.899 1270.89 252.72L1267.14 251.935C1266.72 251.848 1266.29 251.905 1265.91 252.097L1263.99 253.069C1263.07 253.536 1261.94 253.167 1261.47 252.245L1256.4 242.227C1255.93 241.305 1256.3 240.179 1257.23 239.712L1270.59 232.947C1271.51 232.48 1272.64 232.849 1273.11 233.771L1278.18 243.789Z" stroke="#0178FF"/>
            <path d="M1267.31 247.193C1267.78 248.115 1268.9 248.484 1269.82 248.017C1270.75 247.55 1271.12 246.424 1270.65 245.502C1270.18 244.58 1269.06 244.211 1268.13 244.678C1267.21 245.145 1266.84 246.271 1267.31 247.193Z" stroke="#0178FF"/>
          </g>

          {/* Document icons - bottom left */}
          <g opacity="0.12" clipPath="url(#clip0_45_237)">
            <path d="M174.09 340.764L179.212 322.138C179.493 321.112 179.294 320.015 178.67 319.154L174.519 313.434C173.585 312.147 172.242 311.217 170.709 310.795L158.57 307.457C157.038 307.036 155.407 307.149 153.947 307.777L147.455 310.571C146.479 310.991 145.746 311.833 145.464 312.858L140.342 331.485C139.317 335.212 141.508 339.065 145.236 340.09L165.485 345.658C169.212 346.683 173.065 344.492 174.09 340.764Z" stroke="#0178FF" strokeWidth="3" strokeLinejoin="round"/>
            <path d="M157.722 314.484L167.846 317.268L166.454 322.33C165.685 325.126 162.796 326.769 160 326C157.204 325.231 155.561 322.342 156.33 319.546L157.722 314.484Z" stroke="#0178FF" strokeWidth="3" strokeLinejoin="round"/>
            <path d="M146.754 311.468L178.814 320.284" stroke="#0178FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </g>

          {/* Document icons - bottom right */}
          <g opacity="0.12" clipPath="url(#clip1_45_237)">
            <path d="M1244.91 363.835L1239.79 345.209C1239.51 344.183 1239.71 343.086 1240.33 342.225L1244.48 336.505C1245.41 335.218 1246.76 334.288 1248.29 333.866L1260.43 330.529C1261.96 330.107 1263.59 330.22 1265.05 330.848L1271.54 333.642C1272.52 334.062 1273.25 334.904 1273.54 335.929L1278.66 354.556C1279.68 358.283 1277.49 362.136 1273.76 363.161L1253.52 368.729C1249.79 369.754 1245.94 367.563 1244.91 363.835Z" stroke="#0178FF" strokeWidth="3" strokeLinejoin="round"/>
            <path d="M1261.28 337.555L1251.15 340.339L1252.55 345.401C1253.31 348.197 1256.2 349.84 1259 349.071C1261.8 348.302 1263.44 345.413 1262.67 342.617L1261.28 337.555Z" stroke="#0178FF" strokeWidth="3" strokeLinejoin="round"/>
            <path d="M1272.25 334.539L1240.19 343.355" stroke="#0178FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </g>

          {/* Small document icons - top left */}
          <g opacity="0.12" clipPath="url(#clip2_45_237)">
            <path d="M203.727 51.9126L206.467 61.8773C206.618 62.4257 206.511 63.013 206.177 63.4734L203.956 66.5337C203.457 67.2219 202.738 67.7197 201.918 67.9451L195.424 69.7307C194.604 69.9562 193.732 69.8959 192.951 69.5597L189.478 68.065C188.956 67.8402 188.564 67.39 188.413 66.8416L185.673 56.8769C185.124 54.8827 186.297 52.8216 188.291 52.2733L199.123 49.2947C201.117 48.7464 203.178 49.9185 203.727 51.9126Z" stroke="#0178FF" strokeWidth="3" strokeLinejoin="round"/>
            <path d="M194.97 65.9717L200.386 64.4824L199.642 61.7743C199.231 60.2787 197.685 59.3996 196.189 59.8109C194.693 60.2221 193.814 61.768 194.226 63.2636L194.97 65.9717Z" stroke="#0178FF" strokeWidth="3" strokeLinejoin="round"/>
            <path d="M189.103 67.5852L206.254 62.8692" stroke="#0178FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </g>

          {/* Small document icons - top right */}
          <g opacity="0.12" clipPath="url(#clip3_45_237)">
            <path d="M1215.27 74.9837L1212.53 84.9483C1212.38 85.4968 1212.49 86.0841 1212.82 86.5444L1215.04 89.6047C1215.54 90.293 1216.26 90.7907 1217.08 91.0162L1223.58 92.8018C1224.4 93.0272 1225.27 92.9669 1226.05 92.6308L1229.52 91.1361C1230.04 90.9112 1230.44 90.461 1230.59 89.9126L1233.33 79.948C1233.88 77.9538 1232.7 75.8927 1230.71 75.3443L1219.88 72.3658C1217.88 71.8174 1215.82 72.9895 1215.27 74.9837Z" stroke="#0178FF" strokeWidth="3" strokeLinejoin="round"/>
            <path d="M1224.03 89.0427L1218.61 87.5534L1219.36 84.8454C1219.77 83.3497 1221.32 82.4707 1222.81 82.8819C1224.31 83.2932 1225.19 84.839 1224.77 86.3346L1224.03 89.0427Z" stroke="#0178FF" strokeWidth="3" strokeLinejoin="round"/>
            <path d="M1229.9 90.6562L1212.75 85.9402" stroke="#0178FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </g>

          <defs>
            <clipPath id="clip0_45_237">
              <rect width="42" height="42" fill="white" transform="translate(145.319 300.184) rotate(15.3746)"/>
            </clipPath>
            <clipPath id="clip1_45_237">
              <rect width="42" height="42" fill="white" transform="matrix(-0.964213 0.265128 0.265128 0.964213 1273.68 323.255)"/>
            </clipPath>
            <clipPath id="clip2_45_237">
              <rect width="22.4688" height="22.4688" fill="white" transform="matrix(0.964213 -0.265128 -0.265128 -0.964213 188.335 73.6218)"/>
            </clipPath>
            <clipPath id="clip3_45_237">
              <rect width="22.4688" height="22.4688" fill="white" transform="translate(1230.66 96.6929) rotate(-164.625)"/>
            </clipPath>
          </defs>
        </svg>
        
        {/* Content container */}
        <div className="relative mx-auto h-full flex items-center justify-center">
          <div className="text-center">
            {/* Headline responsive */}
            <h2 className="mb-6 sm:mb-8 text-blue-600 leading-tight">
              <span 
                className="font-medium"
                style={{
                  fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
                  fontWeight: 500,
                  fontSize: 'clamp(32px, 8vw, 88.39px)',
                  lineHeight: '84.64px',
                  letterSpacing: '-0.06em',
                  textAlign: 'center'
                }}
              >
                Join
              </span>{" "}
              <span 
                className="italic font-bold"
                style={{ 
                  fontFamily: 'var(--font-cormorant-garamond), Cormorant Garamond, serif',
                  fontWeight: 700,
                  fontStyle: 'italic',
                  fontSize: 'clamp(38px, 9vw, 100px)',
                  lineHeight: '84.64px',
                  letterSpacing: '-0.06em',
                  textAlign: 'center'
                }}
              >
                The
              </span>{" "}
              <span 
                className="font-medium"
                style={{
                  fontFamily: 'var(--font-dm-sans), DM Sans, sans-serif',
                  fontWeight: 500,
                  fontSize: 'clamp(32px, 8vw, 88.39px)',
                  lineHeight: '84.64px',
                  letterSpacing: '-0.06em',
                  textAlign: 'center'
                }}
              >
                App
              </span>{" "}
              <span 
                className="italic font-bold"
                style={{ 
                  fontFamily: 'var(--font-cormorant-garamond), Cormorant Garamond, serif',
                  fontWeight: 700,
                  fontStyle: 'italic',
                  fontSize: 'clamp(38px, 9vw, 100px)',
                  lineHeight: '84.64px',
                  letterSpacing: '-0.06em',
                  textAlign: 'center'
                }}
              >
                Waitlist
              </span>
            </h2>
            
            {/* Descriptive text responsive */}
            <p className="mb-8 sm:mb-12 text-black text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-normal leading-relaxed text-center max-w-3xl mx-auto">
              Get alerts, scan documents, chat with agents,{" "}
              <span className="hidden sm:inline"><br /></span>
              <span className="sm:hidden"> </span>
              and track your progress — all on the go.
            </p>
            
            {/* Email input field responsive */}
            <form onSubmit={handleSubmit} className="w-full max-w-4xl mx-auto">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-3">
                {/* Input field responsive */}
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="johnolusegun@example.com"
                  className="flex-1 h-14 sm:h-16 lg:h-20 px-6 py-4 border border-gray-300 rounded-full text-center text-sm sm:text-base lg:text-lg xl:text-2xl font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-transparent"
                  style={{
                    color: status === "success" ? '#0178FF' : '#333',
                  }}
                  disabled={status === "submitting"}
                  required
                />
                
                {/* Submit button responsive */}
                <button 
                  type="submit"
                  disabled={status === "submitting" || !email}
                  className="flex items-center justify-center flex-shrink-0 disabled:opacity-60 mx-auto sm:mx-0"
                  style={{ background: 'none', border: 'none', padding: 0 }}
                >
                  <svg className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20" viewBox="0 0 113 113" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="113" height="113" rx="56.5" fill="#0178FF"/>
                    <g clipPath="url(#clip0_45_190)">
                      <path d="M42.5353 41.3804V45.2305H66.6904L41.3802 70.4559L44.0177 73.2114L69.4279 47.8746V72.0238H73.2112V41.3804H42.5353Z" fill="white"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_45_190">
                        <rect width="31.831" height="31.831" fill="white" transform="translate(41.3802 41.3804)"/>
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
            </form>
            
            {/* Status messages */}
            {status === "success" && (
              <p className="mt-4 text-center text-green-600 font-medium">
                🎉 Redirecting...
              </p>
            )}
            {status === "error" && (
              <p className="mt-4 text-center text-red-600 font-medium">
                Something went wrong. Please try again.
              </p>
            )}
          </div>
        </div>
              </div>
      </div>
    </section>
  );
}
