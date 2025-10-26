                                                            Resume Builder 

                                                        
 this is a CREAD Application used  for creating ats  resume   

 1  npm create vite@latest rbuild -- --template react
2  cd rbuild
3  npm install
4  code .
5  npm run dev
6  Clear the unwanted code 
7  Install 3rd Party Library 

    i) react material-ui  : https://mui.com/material-ui/
            -> npm install @mui/material @emotion/react @emotion/styled 
                        (@emotion/react and @emotion/styled are required peer dependencies for styling in MUI.)
            -> npm install @mui/icons-material 
                        (This package includes all the Material Design icons in SVG format as React components.)

    ii) React Icons : https://tsi.github.io/react-icons/
            -> npm install react-icons --save

    iii) Google fonts  : https://fonts.google.com/

            Embed code in the <head> of your html
                <link rel="preconnect" href="https://fonts.googleapis.com">
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                <link href="https://fonts.googleapis.com/css2?family=Afacad+Flux:wght@100..1000&family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Dancing+Script:wght@400..700&family=Edu+AU+VIC+WA+NT+Pre&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Old+Standard+TT:ital,wght@0,400;0,700;1,400&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Pacifico&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Playwrite+AU+SA:wght@100..400&family=Playwrite+GB+S:ital,wght@0,100..400;1,100..400&family=Playwrite+IN:wght@100..400&family=Playwrite+TZ+Guides&family=Playwrite+VN:wght@100..400&family=Raleway:ital,wght@0,100..900;1,100..900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&family=Tektur:wght@400..900&family=Winky+Sans:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet">
            Choose font family
                font-family: "Barlow", sans-serif;
                font-weight: 400;
                font-style: normal;   

    iv) Alert : https://sweetalert2.github.io/
                npm install sweetalert2

    v) React Bootstrap : npm install react-bootstrap bootstrap  


8  Install necessary dependencies
        
        npm install axios react-router-dom html2canvas,jspdf

9 Component creation  and file structure

├── src/
│   ├── components/
│   │   ├── Form.jsx
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── Edit.jsx
        ├── Preview.jsx
        
│   ├── pages/
│   │   ├── LandingPage.jsx
│   │   ├── ResumeGeneratorPage.jsx
│   │   |___ History.jsx
│   │   └── PageNotFound.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── ...
├── package.json
└── vite.config.js

10 Routing 