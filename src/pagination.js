const hex = document.querySelectorAll('.hexagon');
const control = document.querySelectorAll('.control');
const controlRight = document.querySelector('.control-right');
const controlLeft = document.querySelector('.control-left');
const pageIndicators = document.querySelectorAll('.page');
const totalPages = 3;
let currentPage = 0;
let right = true;
const hexContents = {
  0: {
    0: `<img src="assets/finalErarta.png" alt="erarta">`,
    1: `<img src="assets/moviedbHex.png" alt="movie-db">`,
    2: `<img src="assets/snake.png" alt="snake">`,
    3: `<img src="assets/lthr2.png" alt="leather">`,
    4: `<img src="assets/calc.jpg" alt="calculator">`,
    5: `<img src="assets/doors2.png" alt="monty-hall">`,
    6: `
      <form class="contact">
          <input type="text" placeholder="Ваше имя">
          <input type="text" placeholder="Телефон">
          <button class="send">Отправить</button>
      </form>
    `,
    7: `
      <div class="websocket-chat">
          <svg viewBox="0 0 247 31" fill="none" class="tt-websocket websocket">
              <path d="M35.1484 9.88672C34.3411 11.6966 33.4688 13.4805 32.5312 15.2383C31.5938 16.9831 30.6107 18.6367 29.582 20.1992C28.5664 21.7617 27.5247 23.207 26.457 24.5352C25.3893 25.8503 24.3281 26.9896 23.2734 27.9531C22.2318 28.9036 21.2096 29.6523 20.207 30.1992C19.2174 30.7331 18.2799 31 17.3945 31C17.0299 31 16.6914 30.9349 16.3789 30.8047C16.0664 30.6745 15.793 30.4987 15.5586 30.2773C15.3242 30.043 15.1419 29.7695 15.0117 29.457C14.8815 29.1445 14.8164 28.806 14.8164 28.4414V18.9688L4.73828 30.2383C4.47786 30.4987 4.19141 30.694 3.87891 30.8242C3.57943 30.9414 3.26693 31 2.94141 31C2.58984 31 2.25781 30.9349 1.94531 30.8047C1.64583 30.6745 1.37891 30.4987 1.14453 30.2773C0.910156 30.043 0.721354 29.7695 0.578125 29.457C0.447917 29.1445 0.382812 28.806 0.382812 28.4414V9.88672H5.46094V21.918L15.5781 10.6094C15.9427 10.2448 16.3724 10.0169 16.8672 9.92578C17.375 9.82161 17.8698 9.8737 18.3516 10.082C18.8333 10.2773 19.2109 10.5898 19.4844 11.0195C19.7708 11.4362 19.9141 11.8984 19.9141 12.4062V24.4766C21.0078 23.4219 21.9974 22.3086 22.8828 21.1367C23.7682 19.9648 24.5885 18.7604 25.3438 17.5234C26.112 16.2734 26.8281 15.0104 27.4922 13.7344C28.1693 12.4453 28.8268 11.1628 29.4648 9.88672H35.1484Z" fill="#2ce7e1"/>
              <path d="M59.6211 16.8789C59.6211 17.582 59.4974 18.3438 59.25 19.1641C59.0026 19.9714 58.599 20.7266 58.0391 21.4297C57.4922 22.1198 56.7695 22.6992 55.8711 23.168C54.9857 23.6367 53.9049 23.8711 52.6289 23.8711H43.4688V19.0469H52.6289C53.319 19.0469 53.8529 18.8385 54.2305 18.4219C54.6081 17.9922 54.7969 17.4648 54.7969 16.8398C54.7969 16.1758 54.582 15.6549 54.1523 15.2773C53.7357 14.8997 53.2279 14.7109 52.6289 14.7109H43.4688C42.7786 14.7109 42.2448 14.9258 41.8672 15.3555C41.4896 15.7721 41.3008 16.293 41.3008 16.918V24.0078C41.3008 24.6849 41.5091 25.2122 41.9258 25.5898C42.3555 25.9674 42.8828 26.1562 43.5078 26.1562H52.6289V31H43.4688C42.7656 31 42.0039 30.8763 41.1836 30.6289C40.3763 30.3815 39.6211 29.9844 38.918 29.4375C38.2279 28.8776 37.6484 28.1549 37.1797 27.2695C36.7109 26.3711 36.4766 25.2839 36.4766 24.0078V16.8789C36.4766 16.1758 36.6003 15.4206 36.8477 14.6133C37.0951 13.793 37.4922 13.0378 38.0391 12.3477C38.599 11.6445 39.3216 11.0586 40.207 10.5898C41.1055 10.1211 42.1927 9.88672 43.4688 9.88672H52.6289C53.332 9.88672 54.0872 10.0104 54.8945 10.2578C55.7148 10.5052 56.4701 10.9089 57.1602 11.4688C57.8633 12.0156 58.4492 12.7383 58.918 13.6367C59.3867 14.5221 59.6211 15.6029 59.6211 16.8789Z" fill="#2ce7e1"/>
              <path d="M86.3203 23.8711C86.3203 24.3529 86.2617 24.8607 86.1445 25.3945C86.0404 25.9284 85.8711 26.4622 85.6367 26.9961C85.4023 27.5169 85.0964 28.0182 84.7188 28.5C84.3542 28.9818 83.9049 29.4115 83.3711 29.7891C82.8503 30.1536 82.2448 30.4466 81.5547 30.668C80.8646 30.8893 80.0833 31 79.2109 31H70.0508C69.569 31 69.0612 30.9479 68.5273 30.8438C67.9935 30.7266 67.4596 30.5508 66.9258 30.3164C66.4049 30.082 65.9036 29.7826 65.4219 29.418C64.9401 29.0404 64.5104 28.5911 64.1328 28.0703C63.7682 27.5365 63.4753 26.9245 63.2539 26.2344C63.0326 25.5312 62.9219 24.7435 62.9219 23.8711V0.960938H68V23.8711C68 24.4961 68.1953 24.9974 68.5859 25.375C68.9766 25.7396 69.4648 25.9219 70.0508 25.9219H79.2109C79.849 25.9219 80.3438 25.7331 80.6953 25.3555C81.0599 24.9779 81.2422 24.4831 81.2422 23.8711V16.9961C81.2422 16.3581 81.0534 15.8633 80.6758 15.5117C80.2982 15.1471 79.8099 14.9648 79.2109 14.9648H70.0508V9.88672H79.2109C79.6927 9.88672 80.2005 9.94531 80.7344 10.0625C81.2682 10.1667 81.7956 10.3359 82.3164 10.5703C82.8503 10.8047 83.3581 11.1107 83.8398 11.4883C84.3216 11.8529 84.7448 12.3021 85.1094 12.8359C85.474 13.3568 85.7669 13.9622 85.9883 14.6523C86.2096 15.3424 86.3203 16.1237 86.3203 16.9961V23.8711Z" fill="#2ce7e1"/>
              <path d="M118.137 22.7578C118.137 23.7604 118.007 24.6654 117.746 25.4727C117.499 26.2669 117.167 26.9701 116.75 27.582C116.333 28.194 115.845 28.7148 115.285 29.1445C114.725 29.5742 114.146 29.9258 113.547 30.1992C112.948 30.4727 112.336 30.6745 111.711 30.8047C111.099 30.9349 110.52 31 109.973 31H90.3828V25.9219H109.973C110.949 25.9219 111.704 25.6354 112.238 25.0625C112.785 24.4896 113.059 23.7214 113.059 22.7578C113.059 22.2891 112.987 21.8594 112.844 21.4688C112.701 21.0781 112.492 20.7396 112.219 20.4531C111.958 20.1667 111.633 19.9453 111.242 19.7891C110.865 19.6328 110.441 19.5547 109.973 19.5547H98.293C97.4727 19.5547 96.5872 19.4115 95.6367 19.125C94.6862 18.8255 93.8008 18.3503 92.9805 17.6992C92.1732 17.0482 91.4961 16.1953 90.9492 15.1406C90.4154 14.0859 90.1484 12.7969 90.1484 11.2734C90.1484 9.75 90.4154 8.46745 90.9492 7.42578C91.4961 6.37109 92.1732 5.51823 92.9805 4.86719C93.8008 4.20312 94.6862 3.72786 95.6367 3.44141C96.5872 3.14193 97.4727 2.99219 98.293 2.99219H115.578V8.07031H98.293C97.3294 8.07031 96.5742 8.36328 96.0273 8.94922C95.4935 9.53516 95.2266 10.3099 95.2266 11.2734C95.2266 12.25 95.4935 13.0247 96.0273 13.5977C96.5742 14.1576 97.3294 14.4375 98.293 14.4375H109.973H110.012C110.559 14.4505 111.138 14.5286 111.75 14.6719C112.362 14.8021 112.967 15.0104 113.566 15.2969C114.178 15.5833 114.758 15.9479 115.305 16.3906C115.852 16.8203 116.333 17.3411 116.75 17.9531C117.18 18.5651 117.518 19.2682 117.766 20.0625C118.013 20.8568 118.137 21.7552 118.137 22.7578Z" fill="#2ce7e1"/>
              <path d="M144.758 23.8711C144.758 24.7435 144.647 25.5312 144.426 26.2344C144.204 26.9245 143.911 27.5365 143.547 28.0703C143.182 28.5911 142.759 29.0404 142.277 29.418C141.796 29.7826 141.288 30.082 140.754 30.3164C140.233 30.5508 139.699 30.7266 139.152 30.8438C138.618 30.9479 138.111 31 137.629 31H128.469C127.766 31 126.997 30.8763 126.164 30.6289C125.331 30.3815 124.556 29.9779 123.84 29.418C123.137 28.8451 122.544 28.1094 122.062 27.2109C121.594 26.2995 121.359 25.1862 121.359 23.8711V16.9961C121.359 15.694 121.594 14.5938 122.062 13.6953C122.544 12.7839 123.137 12.0482 123.84 11.4883C124.556 10.9154 125.331 10.5052 126.164 10.2578C126.997 10.0104 127.766 9.88672 128.469 9.88672H137.629C138.931 9.88672 140.038 10.1211 140.949 10.5898C141.861 11.0586 142.596 11.651 143.156 12.3672C143.716 13.0703 144.12 13.8385 144.367 14.6719C144.628 15.5052 144.758 16.2799 144.758 16.9961V23.8711ZM139.68 17.0352C139.68 16.332 139.504 15.8112 139.152 15.4727C138.801 15.1341 138.293 14.9648 137.629 14.9648H128.508C127.831 14.9648 127.316 15.1406 126.965 15.4922C126.613 15.8307 126.438 16.332 126.438 16.9961V23.8711C126.438 24.5352 126.613 25.043 126.965 25.3945C127.316 25.7461 127.831 25.9219 128.508 25.9219H137.629C138.319 25.9219 138.833 25.7461 139.172 25.3945C139.51 25.043 139.68 24.5352 139.68 23.8711V17.0352Z" fill="#2ce7e1"/>
              <path d="M169.543 31H155.773C155.07 31 154.302 30.8763 153.469 30.6289C152.635 30.3815 151.861 29.9779 151.145 29.418C150.441 28.8451 149.849 28.1094 149.367 27.2109C148.898 26.2995 148.664 25.1862 148.664 23.8711V16.9961C148.664 16.5143 148.716 16.0065 148.82 15.4727C148.938 14.9388 149.113 14.4115 149.348 13.8906C149.582 13.3568 149.882 12.849 150.246 12.3672C150.624 11.8854 151.073 11.4622 151.594 11.0977C152.128 10.7331 152.74 10.4401 153.43 10.2188C154.12 9.9974 154.901 9.88672 155.773 9.88672H169.543V14.9648H155.773C155.109 14.9648 154.602 15.1341 154.25 15.4727C153.911 15.8112 153.742 16.332 153.742 17.0352V23.8711C153.742 24.5352 153.918 25.043 154.27 25.3945C154.621 25.7461 155.135 25.9219 155.812 25.9219H169.543V31Z" fill="#2ce7e1"/>
              <path d="M198.547 31H191.223L180.988 21.1172C180.415 20.5964 180.148 19.9453 180.188 19.1641C180.214 18.7995 180.305 18.4609 180.461 18.1484C180.63 17.8229 180.858 17.5495 181.145 17.3281L190.422 9.84766H198.547L186.594 19.4766L198.547 31ZM178.898 31H173.82V0.960938H178.898V31Z" fill="#2ce7e1"/>
              <path d="M223.41 16.8789C223.41 17.582 223.286 18.3438 223.039 19.1641C222.792 19.9714 222.388 20.7266 221.828 21.4297C221.281 22.1198 220.559 22.6992 219.66 23.168C218.775 23.6367 217.694 23.8711 216.418 23.8711H207.258V19.0469H216.418C217.108 19.0469 217.642 18.8385 218.02 18.4219C218.397 17.9922 218.586 17.4648 218.586 16.8398C218.586 16.1758 218.371 15.6549 217.941 15.2773C217.525 14.8997 217.017 14.7109 216.418 14.7109H207.258C206.568 14.7109 206.034 14.9258 205.656 15.3555C205.279 15.7721 205.09 16.293 205.09 16.918V24.0078C205.09 24.6849 205.298 25.2122 205.715 25.5898C206.145 25.9674 206.672 26.1562 207.297 26.1562H216.418V31H207.258C206.555 31 205.793 30.8763 204.973 30.6289C204.165 30.3815 203.41 29.9844 202.707 29.4375C202.017 28.8776 201.438 28.1549 200.969 27.2695C200.5 26.3711 200.266 25.2839 200.266 24.0078V16.8789C200.266 16.1758 200.389 15.4206 200.637 14.6133C200.884 13.793 201.281 13.0378 201.828 12.3477C202.388 11.6445 203.111 11.0586 203.996 10.5898C204.895 10.1211 205.982 9.88672 207.258 9.88672H216.418C217.121 9.88672 217.876 10.0104 218.684 10.2578C219.504 10.5052 220.259 10.9089 220.949 11.4688C221.652 12.0156 222.238 12.7383 222.707 13.6367C223.176 14.5221 223.41 15.6029 223.41 16.8789Z" fill="#2ce7e1"/>
              <path d="M246.027 14.9648H237.16V31H232.023V14.9648H225.422V9.88672H232.023V2.99219H237.16V9.88672H246.027V14.9648Z" fill="#2ce7e1"/>
          </svg>
          <svg viewBox="0 0 247 31" fill="none" class="yl-websocket websocket">
              <path d="M35.1484 9.88672C34.3411 11.6966 33.4688 13.4805 32.5312 15.2383C31.5938 16.9831 30.6107 18.6367 29.582 20.1992C28.5664 21.7617 27.5247 23.207 26.457 24.5352C25.3893 25.8503 24.3281 26.9896 23.2734 27.9531C22.2318 28.9036 21.2096 29.6523 20.207 30.1992C19.2174 30.7331 18.2799 31 17.3945 31C17.0299 31 16.6914 30.9349 16.3789 30.8047C16.0664 30.6745 15.793 30.4987 15.5586 30.2773C15.3242 30.043 15.1419 29.7695 15.0117 29.457C14.8815 29.1445 14.8164 28.806 14.8164 28.4414V18.9688L4.73828 30.2383C4.47786 30.4987 4.19141 30.694 3.87891 30.8242C3.57943 30.9414 3.26693 31 2.94141 31C2.58984 31 2.25781 30.9349 1.94531 30.8047C1.64583 30.6745 1.37891 30.4987 1.14453 30.2773C0.910156 30.043 0.721354 29.7695 0.578125 29.457C0.447917 29.1445 0.382812 28.806 0.382812 28.4414V9.88672H5.46094V21.918L15.5781 10.6094C15.9427 10.2448 16.3724 10.0169 16.8672 9.92578C17.375 9.82161 17.8698 9.8737 18.3516 10.082C18.8333 10.2773 19.2109 10.5898 19.4844 11.0195C19.7708 11.4362 19.9141 11.8984 19.9141 12.4062V24.4766C21.0078 23.4219 21.9974 22.3086 22.8828 21.1367C23.7682 19.9648 24.5885 18.7604 25.3438 17.5234C26.112 16.2734 26.8281 15.0104 27.4922 13.7344C28.1693 12.4453 28.8268 11.1628 29.4648 9.88672H35.1484Z" fill="#f9e937"/>
              <path d="M59.6211 16.8789C59.6211 17.582 59.4974 18.3438 59.25 19.1641C59.0026 19.9714 58.599 20.7266 58.0391 21.4297C57.4922 22.1198 56.7695 22.6992 55.8711 23.168C54.9857 23.6367 53.9049 23.8711 52.6289 23.8711H43.4688V19.0469H52.6289C53.319 19.0469 53.8529 18.8385 54.2305 18.4219C54.6081 17.9922 54.7969 17.4648 54.7969 16.8398C54.7969 16.1758 54.582 15.6549 54.1523 15.2773C53.7357 14.8997 53.2279 14.7109 52.6289 14.7109H43.4688C42.7786 14.7109 42.2448 14.9258 41.8672 15.3555C41.4896 15.7721 41.3008 16.293 41.3008 16.918V24.0078C41.3008 24.6849 41.5091 25.2122 41.9258 25.5898C42.3555 25.9674 42.8828 26.1562 43.5078 26.1562H52.6289V31H43.4688C42.7656 31 42.0039 30.8763 41.1836 30.6289C40.3763 30.3815 39.6211 29.9844 38.918 29.4375C38.2279 28.8776 37.6484 28.1549 37.1797 27.2695C36.7109 26.3711 36.4766 25.2839 36.4766 24.0078V16.8789C36.4766 16.1758 36.6003 15.4206 36.8477 14.6133C37.0951 13.793 37.4922 13.0378 38.0391 12.3477C38.599 11.6445 39.3216 11.0586 40.207 10.5898C41.1055 10.1211 42.1927 9.88672 43.4688 9.88672H52.6289C53.332 9.88672 54.0872 10.0104 54.8945 10.2578C55.7148 10.5052 56.4701 10.9089 57.1602 11.4688C57.8633 12.0156 58.4492 12.7383 58.918 13.6367C59.3867 14.5221 59.6211 15.6029 59.6211 16.8789Z" fill="#f9e937"/>
              <path d="M86.3203 23.8711C86.3203 24.3529 86.2617 24.8607 86.1445 25.3945C86.0404 25.9284 85.8711 26.4622 85.6367 26.9961C85.4023 27.5169 85.0964 28.0182 84.7188 28.5C84.3542 28.9818 83.9049 29.4115 83.3711 29.7891C82.8503 30.1536 82.2448 30.4466 81.5547 30.668C80.8646 30.8893 80.0833 31 79.2109 31H70.0508C69.569 31 69.0612 30.9479 68.5273 30.8438C67.9935 30.7266 67.4596 30.5508 66.9258 30.3164C66.4049 30.082 65.9036 29.7826 65.4219 29.418C64.9401 29.0404 64.5104 28.5911 64.1328 28.0703C63.7682 27.5365 63.4753 26.9245 63.2539 26.2344C63.0326 25.5312 62.9219 24.7435 62.9219 23.8711V0.960938H68V23.8711C68 24.4961 68.1953 24.9974 68.5859 25.375C68.9766 25.7396 69.4648 25.9219 70.0508 25.9219H79.2109C79.849 25.9219 80.3438 25.7331 80.6953 25.3555C81.0599 24.9779 81.2422 24.4831 81.2422 23.8711V16.9961C81.2422 16.3581 81.0534 15.8633 80.6758 15.5117C80.2982 15.1471 79.8099 14.9648 79.2109 14.9648H70.0508V9.88672H79.2109C79.6927 9.88672 80.2005 9.94531 80.7344 10.0625C81.2682 10.1667 81.7956 10.3359 82.3164 10.5703C82.8503 10.8047 83.3581 11.1107 83.8398 11.4883C84.3216 11.8529 84.7448 12.3021 85.1094 12.8359C85.474 13.3568 85.7669 13.9622 85.9883 14.6523C86.2096 15.3424 86.3203 16.1237 86.3203 16.9961V23.8711Z" fill="#f9e937"/>
              <path d="M118.137 22.7578C118.137 23.7604 118.007 24.6654 117.746 25.4727C117.499 26.2669 117.167 26.9701 116.75 27.582C116.333 28.194 115.845 28.7148 115.285 29.1445C114.725 29.5742 114.146 29.9258 113.547 30.1992C112.948 30.4727 112.336 30.6745 111.711 30.8047C111.099 30.9349 110.52 31 109.973 31H90.3828V25.9219H109.973C110.949 25.9219 111.704 25.6354 112.238 25.0625C112.785 24.4896 113.059 23.7214 113.059 22.7578C113.059 22.2891 112.987 21.8594 112.844 21.4688C112.701 21.0781 112.492 20.7396 112.219 20.4531C111.958 20.1667 111.633 19.9453 111.242 19.7891C110.865 19.6328 110.441 19.5547 109.973 19.5547H98.293C97.4727 19.5547 96.5872 19.4115 95.6367 19.125C94.6862 18.8255 93.8008 18.3503 92.9805 17.6992C92.1732 17.0482 91.4961 16.1953 90.9492 15.1406C90.4154 14.0859 90.1484 12.7969 90.1484 11.2734C90.1484 9.75 90.4154 8.46745 90.9492 7.42578C91.4961 6.37109 92.1732 5.51823 92.9805 4.86719C93.8008 4.20312 94.6862 3.72786 95.6367 3.44141C96.5872 3.14193 97.4727 2.99219 98.293 2.99219H115.578V8.07031H98.293C97.3294 8.07031 96.5742 8.36328 96.0273 8.94922C95.4935 9.53516 95.2266 10.3099 95.2266 11.2734C95.2266 12.25 95.4935 13.0247 96.0273 13.5977C96.5742 14.1576 97.3294 14.4375 98.293 14.4375H109.973H110.012C110.559 14.4505 111.138 14.5286 111.75 14.6719C112.362 14.8021 112.967 15.0104 113.566 15.2969C114.178 15.5833 114.758 15.9479 115.305 16.3906C115.852 16.8203 116.333 17.3411 116.75 17.9531C117.18 18.5651 117.518 19.2682 117.766 20.0625C118.013 20.8568 118.137 21.7552 118.137 22.7578Z" fill="#f9e937"/>
              <path d="M144.758 23.8711C144.758 24.7435 144.647 25.5312 144.426 26.2344C144.204 26.9245 143.911 27.5365 143.547 28.0703C143.182 28.5911 142.759 29.0404 142.277 29.418C141.796 29.7826 141.288 30.082 140.754 30.3164C140.233 30.5508 139.699 30.7266 139.152 30.8438C138.618 30.9479 138.111 31 137.629 31H128.469C127.766 31 126.997 30.8763 126.164 30.6289C125.331 30.3815 124.556 29.9779 123.84 29.418C123.137 28.8451 122.544 28.1094 122.062 27.2109C121.594 26.2995 121.359 25.1862 121.359 23.8711V16.9961C121.359 15.694 121.594 14.5938 122.062 13.6953C122.544 12.7839 123.137 12.0482 123.84 11.4883C124.556 10.9154 125.331 10.5052 126.164 10.2578C126.997 10.0104 127.766 9.88672 128.469 9.88672H137.629C138.931 9.88672 140.038 10.1211 140.949 10.5898C141.861 11.0586 142.596 11.651 143.156 12.3672C143.716 13.0703 144.12 13.8385 144.367 14.6719C144.628 15.5052 144.758 16.2799 144.758 16.9961V23.8711ZM139.68 17.0352C139.68 16.332 139.504 15.8112 139.152 15.4727C138.801 15.1341 138.293 14.9648 137.629 14.9648H128.508C127.831 14.9648 127.316 15.1406 126.965 15.4922C126.613 15.8307 126.438 16.332 126.438 16.9961V23.8711C126.438 24.5352 126.613 25.043 126.965 25.3945C127.316 25.7461 127.831 25.9219 128.508 25.9219H137.629C138.319 25.9219 138.833 25.7461 139.172 25.3945C139.51 25.043 139.68 24.5352 139.68 23.8711V17.0352Z" fill="#f9e937"/>
              <path d="M169.543 31H155.773C155.07 31 154.302 30.8763 153.469 30.6289C152.635 30.3815 151.861 29.9779 151.145 29.418C150.441 28.8451 149.849 28.1094 149.367 27.2109C148.898 26.2995 148.664 25.1862 148.664 23.8711V16.9961C148.664 16.5143 148.716 16.0065 148.82 15.4727C148.938 14.9388 149.113 14.4115 149.348 13.8906C149.582 13.3568 149.882 12.849 150.246 12.3672C150.624 11.8854 151.073 11.4622 151.594 11.0977C152.128 10.7331 152.74 10.4401 153.43 10.2188C154.12 9.9974 154.901 9.88672 155.773 9.88672H169.543V14.9648H155.773C155.109 14.9648 154.602 15.1341 154.25 15.4727C153.911 15.8112 153.742 16.332 153.742 17.0352V23.8711C153.742 24.5352 153.918 25.043 154.27 25.3945C154.621 25.7461 155.135 25.9219 155.812 25.9219H169.543V31Z" fill="#f9e937"/>
              <path d="M198.547 31H191.223L180.988 21.1172C180.415 20.5964 180.148 19.9453 180.188 19.1641C180.214 18.7995 180.305 18.4609 180.461 18.1484C180.63 17.8229 180.858 17.5495 181.145 17.3281L190.422 9.84766H198.547L186.594 19.4766L198.547 31ZM178.898 31H173.82V0.960938H178.898V31Z" fill="#f9e937"/>
              <path d="M223.41 16.8789C223.41 17.582 223.286 18.3438 223.039 19.1641C222.792 19.9714 222.388 20.7266 221.828 21.4297C221.281 22.1198 220.559 22.6992 219.66 23.168C218.775 23.6367 217.694 23.8711 216.418 23.8711H207.258V19.0469H216.418C217.108 19.0469 217.642 18.8385 218.02 18.4219C218.397 17.9922 218.586 17.4648 218.586 16.8398C218.586 16.1758 218.371 15.6549 217.941 15.2773C217.525 14.8997 217.017 14.7109 216.418 14.7109H207.258C206.568 14.7109 206.034 14.9258 205.656 15.3555C205.279 15.7721 205.09 16.293 205.09 16.918V24.0078C205.09 24.6849 205.298 25.2122 205.715 25.5898C206.145 25.9674 206.672 26.1562 207.297 26.1562H216.418V31H207.258C206.555 31 205.793 30.8763 204.973 30.6289C204.165 30.3815 203.41 29.9844 202.707 29.4375C202.017 28.8776 201.438 28.1549 200.969 27.2695C200.5 26.3711 200.266 25.2839 200.266 24.0078V16.8789C200.266 16.1758 200.389 15.4206 200.637 14.6133C200.884 13.793 201.281 13.0378 201.828 12.3477C202.388 11.6445 203.111 11.0586 203.996 10.5898C204.895 10.1211 205.982 9.88672 207.258 9.88672H216.418C217.121 9.88672 217.876 10.0104 218.684 10.2578C219.504 10.5052 220.259 10.9089 220.949 11.4688C221.652 12.0156 222.238 12.7383 222.707 13.6367C223.176 14.5221 223.41 15.6029 223.41 16.8789Z" fill="#f9e937"/>
              <path d="M246.027 14.9648H237.16V31H232.023V14.9648H225.422V9.88672H232.023V2.99219H237.16V9.88672H246.027V14.9648Z" fill="#f9e937"/>
          </svg>
          <svg viewBox="0 0 247 31" fill="none" class="rd-websocket websocket">
              <path d="M35.1484 9.88672C34.3411 11.6966 33.4688 13.4805 32.5312 15.2383C31.5938 16.9831 30.6107 18.6367 29.582 20.1992C28.5664 21.7617 27.5247 23.207 26.457 24.5352C25.3893 25.8503 24.3281 26.9896 23.2734 27.9531C22.2318 28.9036 21.2096 29.6523 20.207 30.1992C19.2174 30.7331 18.2799 31 17.3945 31C17.0299 31 16.6914 30.9349 16.3789 30.8047C16.0664 30.6745 15.793 30.4987 15.5586 30.2773C15.3242 30.043 15.1419 29.7695 15.0117 29.457C14.8815 29.1445 14.8164 28.806 14.8164 28.4414V18.9688L4.73828 30.2383C4.47786 30.4987 4.19141 30.694 3.87891 30.8242C3.57943 30.9414 3.26693 31 2.94141 31C2.58984 31 2.25781 30.9349 1.94531 30.8047C1.64583 30.6745 1.37891 30.4987 1.14453 30.2773C0.910156 30.043 0.721354 29.7695 0.578125 29.457C0.447917 29.1445 0.382812 28.806 0.382812 28.4414V9.88672H5.46094V21.918L15.5781 10.6094C15.9427 10.2448 16.3724 10.0169 16.8672 9.92578C17.375 9.82161 17.8698 9.8737 18.3516 10.082C18.8333 10.2773 19.2109 10.5898 19.4844 11.0195C19.7708 11.4362 19.9141 11.8984 19.9141 12.4062V24.4766C21.0078 23.4219 21.9974 22.3086 22.8828 21.1367C23.7682 19.9648 24.5885 18.7604 25.3438 17.5234C26.112 16.2734 26.8281 15.0104 27.4922 13.7344C28.1693 12.4453 28.8268 11.1628 29.4648 9.88672H35.1484Z" fill="#fc2757"/>
              <path d="M59.6211 16.8789C59.6211 17.582 59.4974 18.3438 59.25 19.1641C59.0026 19.9714 58.599 20.7266 58.0391 21.4297C57.4922 22.1198 56.7695 22.6992 55.8711 23.168C54.9857 23.6367 53.9049 23.8711 52.6289 23.8711H43.4688V19.0469H52.6289C53.319 19.0469 53.8529 18.8385 54.2305 18.4219C54.6081 17.9922 54.7969 17.4648 54.7969 16.8398C54.7969 16.1758 54.582 15.6549 54.1523 15.2773C53.7357 14.8997 53.2279 14.7109 52.6289 14.7109H43.4688C42.7786 14.7109 42.2448 14.9258 41.8672 15.3555C41.4896 15.7721 41.3008 16.293 41.3008 16.918V24.0078C41.3008 24.6849 41.5091 25.2122 41.9258 25.5898C42.3555 25.9674 42.8828 26.1562 43.5078 26.1562H52.6289V31H43.4688C42.7656 31 42.0039 30.8763 41.1836 30.6289C40.3763 30.3815 39.6211 29.9844 38.918 29.4375C38.2279 28.8776 37.6484 28.1549 37.1797 27.2695C36.7109 26.3711 36.4766 25.2839 36.4766 24.0078V16.8789C36.4766 16.1758 36.6003 15.4206 36.8477 14.6133C37.0951 13.793 37.4922 13.0378 38.0391 12.3477C38.599 11.6445 39.3216 11.0586 40.207 10.5898C41.1055 10.1211 42.1927 9.88672 43.4688 9.88672H52.6289C53.332 9.88672 54.0872 10.0104 54.8945 10.2578C55.7148 10.5052 56.4701 10.9089 57.1602 11.4688C57.8633 12.0156 58.4492 12.7383 58.918 13.6367C59.3867 14.5221 59.6211 15.6029 59.6211 16.8789Z" fill="#fc2757"/>
              <path d="M86.3203 23.8711C86.3203 24.3529 86.2617 24.8607 86.1445 25.3945C86.0404 25.9284 85.8711 26.4622 85.6367 26.9961C85.4023 27.5169 85.0964 28.0182 84.7188 28.5C84.3542 28.9818 83.9049 29.4115 83.3711 29.7891C82.8503 30.1536 82.2448 30.4466 81.5547 30.668C80.8646 30.8893 80.0833 31 79.2109 31H70.0508C69.569 31 69.0612 30.9479 68.5273 30.8438C67.9935 30.7266 67.4596 30.5508 66.9258 30.3164C66.4049 30.082 65.9036 29.7826 65.4219 29.418C64.9401 29.0404 64.5104 28.5911 64.1328 28.0703C63.7682 27.5365 63.4753 26.9245 63.2539 26.2344C63.0326 25.5312 62.9219 24.7435 62.9219 23.8711V0.960938H68V23.8711C68 24.4961 68.1953 24.9974 68.5859 25.375C68.9766 25.7396 69.4648 25.9219 70.0508 25.9219H79.2109C79.849 25.9219 80.3438 25.7331 80.6953 25.3555C81.0599 24.9779 81.2422 24.4831 81.2422 23.8711V16.9961C81.2422 16.3581 81.0534 15.8633 80.6758 15.5117C80.2982 15.1471 79.8099 14.9648 79.2109 14.9648H70.0508V9.88672H79.2109C79.6927 9.88672 80.2005 9.94531 80.7344 10.0625C81.2682 10.1667 81.7956 10.3359 82.3164 10.5703C82.8503 10.8047 83.3581 11.1107 83.8398 11.4883C84.3216 11.8529 84.7448 12.3021 85.1094 12.8359C85.474 13.3568 85.7669 13.9622 85.9883 14.6523C86.2096 15.3424 86.3203 16.1237 86.3203 16.9961V23.8711Z" fill="#fc2757"/>
              <path d="M118.137 22.7578C118.137 23.7604 118.007 24.6654 117.746 25.4727C117.499 26.2669 117.167 26.9701 116.75 27.582C116.333 28.194 115.845 28.7148 115.285 29.1445C114.725 29.5742 114.146 29.9258 113.547 30.1992C112.948 30.4727 112.336 30.6745 111.711 30.8047C111.099 30.9349 110.52 31 109.973 31H90.3828V25.9219H109.973C110.949 25.9219 111.704 25.6354 112.238 25.0625C112.785 24.4896 113.059 23.7214 113.059 22.7578C113.059 22.2891 112.987 21.8594 112.844 21.4688C112.701 21.0781 112.492 20.7396 112.219 20.4531C111.958 20.1667 111.633 19.9453 111.242 19.7891C110.865 19.6328 110.441 19.5547 109.973 19.5547H98.293C97.4727 19.5547 96.5872 19.4115 95.6367 19.125C94.6862 18.8255 93.8008 18.3503 92.9805 17.6992C92.1732 17.0482 91.4961 16.1953 90.9492 15.1406C90.4154 14.0859 90.1484 12.7969 90.1484 11.2734C90.1484 9.75 90.4154 8.46745 90.9492 7.42578C91.4961 6.37109 92.1732 5.51823 92.9805 4.86719C93.8008 4.20312 94.6862 3.72786 95.6367 3.44141C96.5872 3.14193 97.4727 2.99219 98.293 2.99219H115.578V8.07031H98.293C97.3294 8.07031 96.5742 8.36328 96.0273 8.94922C95.4935 9.53516 95.2266 10.3099 95.2266 11.2734C95.2266 12.25 95.4935 13.0247 96.0273 13.5977C96.5742 14.1576 97.3294 14.4375 98.293 14.4375H109.973H110.012C110.559 14.4505 111.138 14.5286 111.75 14.6719C112.362 14.8021 112.967 15.0104 113.566 15.2969C114.178 15.5833 114.758 15.9479 115.305 16.3906C115.852 16.8203 116.333 17.3411 116.75 17.9531C117.18 18.5651 117.518 19.2682 117.766 20.0625C118.013 20.8568 118.137 21.7552 118.137 22.7578Z" fill="#fc2757"/>
              <path d="M144.758 23.8711C144.758 24.7435 144.647 25.5312 144.426 26.2344C144.204 26.9245 143.911 27.5365 143.547 28.0703C143.182 28.5911 142.759 29.0404 142.277 29.418C141.796 29.7826 141.288 30.082 140.754 30.3164C140.233 30.5508 139.699 30.7266 139.152 30.8438C138.618 30.9479 138.111 31 137.629 31H128.469C127.766 31 126.997 30.8763 126.164 30.6289C125.331 30.3815 124.556 29.9779 123.84 29.418C123.137 28.8451 122.544 28.1094 122.062 27.2109C121.594 26.2995 121.359 25.1862 121.359 23.8711V16.9961C121.359 15.694 121.594 14.5938 122.062 13.6953C122.544 12.7839 123.137 12.0482 123.84 11.4883C124.556 10.9154 125.331 10.5052 126.164 10.2578C126.997 10.0104 127.766 9.88672 128.469 9.88672H137.629C138.931 9.88672 140.038 10.1211 140.949 10.5898C141.861 11.0586 142.596 11.651 143.156 12.3672C143.716 13.0703 144.12 13.8385 144.367 14.6719C144.628 15.5052 144.758 16.2799 144.758 16.9961V23.8711ZM139.68 17.0352C139.68 16.332 139.504 15.8112 139.152 15.4727C138.801 15.1341 138.293 14.9648 137.629 14.9648H128.508C127.831 14.9648 127.316 15.1406 126.965 15.4922C126.613 15.8307 126.438 16.332 126.438 16.9961V23.8711C126.438 24.5352 126.613 25.043 126.965 25.3945C127.316 25.7461 127.831 25.9219 128.508 25.9219H137.629C138.319 25.9219 138.833 25.7461 139.172 25.3945C139.51 25.043 139.68 24.5352 139.68 23.8711V17.0352Z" fill="#fc2757"/>
              <path d="M169.543 31H155.773C155.07 31 154.302 30.8763 153.469 30.6289C152.635 30.3815 151.861 29.9779 151.145 29.418C150.441 28.8451 149.849 28.1094 149.367 27.2109C148.898 26.2995 148.664 25.1862 148.664 23.8711V16.9961C148.664 16.5143 148.716 16.0065 148.82 15.4727C148.938 14.9388 149.113 14.4115 149.348 13.8906C149.582 13.3568 149.882 12.849 150.246 12.3672C150.624 11.8854 151.073 11.4622 151.594 11.0977C152.128 10.7331 152.74 10.4401 153.43 10.2188C154.12 9.9974 154.901 9.88672 155.773 9.88672H169.543V14.9648H155.773C155.109 14.9648 154.602 15.1341 154.25 15.4727C153.911 15.8112 153.742 16.332 153.742 17.0352V23.8711C153.742 24.5352 153.918 25.043 154.27 25.3945C154.621 25.7461 155.135 25.9219 155.812 25.9219H169.543V31Z" fill="#fc2757"/>
              <path d="M198.547 31H191.223L180.988 21.1172C180.415 20.5964 180.148 19.9453 180.188 19.1641C180.214 18.7995 180.305 18.4609 180.461 18.1484C180.63 17.8229 180.858 17.5495 181.145 17.3281L190.422 9.84766H198.547L186.594 19.4766L198.547 31ZM178.898 31H173.82V0.960938H178.898V31Z" fill="#fc2757"/>
              <path d="M223.41 16.8789C223.41 17.582 223.286 18.3438 223.039 19.1641C222.792 19.9714 222.388 20.7266 221.828 21.4297C221.281 22.1198 220.559 22.6992 219.66 23.168C218.775 23.6367 217.694 23.8711 216.418 23.8711H207.258V19.0469H216.418C217.108 19.0469 217.642 18.8385 218.02 18.4219C218.397 17.9922 218.586 17.4648 218.586 16.8398C218.586 16.1758 218.371 15.6549 217.941 15.2773C217.525 14.8997 217.017 14.7109 216.418 14.7109H207.258C206.568 14.7109 206.034 14.9258 205.656 15.3555C205.279 15.7721 205.09 16.293 205.09 16.918V24.0078C205.09 24.6849 205.298 25.2122 205.715 25.5898C206.145 25.9674 206.672 26.1562 207.297 26.1562H216.418V31H207.258C206.555 31 205.793 30.8763 204.973 30.6289C204.165 30.3815 203.41 29.9844 202.707 29.4375C202.017 28.8776 201.438 28.1549 200.969 27.2695C200.5 26.3711 200.266 25.2839 200.266 24.0078V16.8789C200.266 16.1758 200.389 15.4206 200.637 14.6133C200.884 13.793 201.281 13.0378 201.828 12.3477C202.388 11.6445 203.111 11.0586 203.996 10.5898C204.895 10.1211 205.982 9.88672 207.258 9.88672H216.418C217.121 9.88672 217.876 10.0104 218.684 10.2578C219.504 10.5052 220.259 10.9089 220.949 11.4688C221.652 12.0156 222.238 12.7383 222.707 13.6367C223.176 14.5221 223.41 15.6029 223.41 16.8789Z" fill="#fc2757"/>
              <path d="M246.027 14.9648H237.16V31H232.023V14.9648H225.422V9.88672H232.023V2.99219H237.16V9.88672H246.027V14.9648Z" fill="#fc2757"/>
          </svg>

          <svg viewBox="0 0 100 31" fill="none" class="miami-chat chat">
              <path d="M21.832 31H8.0625C7.35938 31 6.59115 30.8763 5.75781 30.6289C4.92448 30.3815 4.14974 29.9779 3.43359 29.418C2.73047 28.8451 2.13802 28.1094 1.65625 27.2109C1.1875 26.2995 0.953125 25.1862 0.953125 23.8711V16.9961C0.953125 16.5143 1.00521 16.0065 1.10938 15.4727C1.22656 14.9388 1.40234 14.4115 1.63672 13.8906C1.87109 13.3568 2.17057 12.849 2.53516 12.3672C2.91276 11.8854 3.36198 11.4622 3.88281 11.0977C4.41667 10.7331 5.02865 10.4401 5.71875 10.2188C6.40885 9.9974 7.1901 9.88672 8.0625 9.88672H21.832V14.9648H8.0625C7.39844 14.9648 6.89062 15.1341 6.53906 15.4727C6.20052 15.8112 6.03125 16.332 6.03125 17.0352V23.8711C6.03125 24.5352 6.20703 25.043 6.55859 25.3945C6.91016 25.7461 7.42448 25.9219 8.10156 25.9219H21.832V31Z" fill="#3c6bc8"/>
              <path d="M49.5078 31H44.4297V16.9961C44.4297 16.332 44.2604 15.8307 43.9219 15.4922C43.5833 15.1406 43.0755 14.9648 42.3984 14.9648H33.2383V9.88672H42.3984C42.8802 9.88672 43.388 9.94531 43.9219 10.0625C44.4557 10.1667 44.9831 10.3359 45.5039 10.5703C46.0378 10.8047 46.5456 11.1107 47.0273 11.4883C47.5091 11.8529 47.9323 12.3021 48.2969 12.8359C48.6615 13.3568 48.9544 13.9622 49.1758 14.6523C49.3971 15.3424 49.5078 16.1237 49.5078 16.9961V31ZM31.1875 31H26.1094V0.960938H31.1875V31Z" fill="#3c6bc8"/>
              <path d="M75.9531 24.0078C75.9531 24.7109 75.8294 25.4727 75.582 26.293C75.3346 27.1003 74.931 27.8555 74.3711 28.5586C73.8242 29.2487 73.1016 29.8281 72.2031 30.2969C71.3177 30.7656 70.237 31 68.9609 31H59.8008C59.0977 31 58.3359 30.8763 57.5156 30.6289C56.7083 30.3815 55.9531 29.9844 55.25 29.4375C54.5599 28.8776 53.9805 28.1549 53.5117 27.2695C53.043 26.3711 52.8086 25.2839 52.8086 24.0078C52.8086 23.3047 52.9323 22.543 53.1797 21.7227C53.4271 20.9023 53.8242 20.1471 54.3711 19.457C54.931 18.7539 55.6536 18.168 56.5391 17.6992C57.4375 17.2305 58.5247 16.9961 59.8008 16.9961H68.9609V21.8398H59.8008C59.1107 21.8398 58.5768 22.0547 58.1992 22.4844C57.8216 22.901 57.6328 23.4219 57.6328 24.0469C57.6328 24.7109 57.8477 25.2318 58.2773 25.6094C58.7201 25.974 59.2409 26.1562 59.8398 26.1562H68.9609C69.651 26.1562 70.1849 25.9479 70.5625 25.5312C70.9401 25.1146 71.1289 24.5938 71.1289 23.9688V16.8789C71.1289 16.2148 70.9206 15.6875 70.5039 15.2969C70.1003 14.9062 69.5859 14.7109 68.9609 14.7109H57.8086V9.88672H68.9609C69.6641 9.88672 70.4193 10.0104 71.2266 10.2578C72.0469 10.5052 72.8021 10.9089 73.4922 11.4688C74.1953 12.0156 74.7812 12.7383 75.25 13.6367C75.7188 14.5221 75.9531 15.6029 75.9531 16.8789V24.0078Z" fill="#3c6bc8"/>
              <path d="M99.4102 14.9648H90.543V31H85.4062V14.9648H78.8047V9.88672H85.4062V2.99219H90.543V9.88672H99.4102V14.9648Z" fill="#3c6bc8"/>
          </svg>
          <svg viewBox="0 0 100 31" fill="none" class="acid-chat chat">
              <path d="M21.832 31H8.0625C7.35938 31 6.59115 30.8763 5.75781 30.6289C4.92448 30.3815 4.14974 29.9779 3.43359 29.418C2.73047 28.8451 2.13802 28.1094 1.65625 27.2109C1.1875 26.2995 0.953125 25.1862 0.953125 23.8711V16.9961C0.953125 16.5143 1.00521 16.0065 1.10938 15.4727C1.22656 14.9388 1.40234 14.4115 1.63672 13.8906C1.87109 13.3568 2.17057 12.849 2.53516 12.3672C2.91276 11.8854 3.36198 11.4622 3.88281 11.0977C4.41667 10.7331 5.02865 10.4401 5.71875 10.2188C6.40885 9.9974 7.1901 9.88672 8.0625 9.88672H21.832V14.9648H8.0625C7.39844 14.9648 6.89062 15.1341 6.53906 15.4727C6.20052 15.8112 6.03125 16.332 6.03125 17.0352V23.8711C6.03125 24.5352 6.20703 25.043 6.55859 25.3945C6.91016 25.7461 7.42448 25.9219 8.10156 25.9219H21.832V31Z" fill="#fd6ba8"/>
              <path d="M49.5078 31H44.4297V16.9961C44.4297 16.332 44.2604 15.8307 43.9219 15.4922C43.5833 15.1406 43.0755 14.9648 42.3984 14.9648H33.2383V9.88672H42.3984C42.8802 9.88672 43.388 9.94531 43.9219 10.0625C44.4557 10.1667 44.9831 10.3359 45.5039 10.5703C46.0378 10.8047 46.5456 11.1107 47.0273 11.4883C47.5091 11.8529 47.9323 12.3021 48.2969 12.8359C48.6615 13.3568 48.9544 13.9622 49.1758 14.6523C49.3971 15.3424 49.5078 16.1237 49.5078 16.9961V31ZM31.1875 31H26.1094V0.960938H31.1875V31Z" fill="#fd6ba8"/>
              <path d="M75.9531 24.0078C75.9531 24.7109 75.8294 25.4727 75.582 26.293C75.3346 27.1003 74.931 27.8555 74.3711 28.5586C73.8242 29.2487 73.1016 29.8281 72.2031 30.2969C71.3177 30.7656 70.237 31 68.9609 31H59.8008C59.0977 31 58.3359 30.8763 57.5156 30.6289C56.7083 30.3815 55.9531 29.9844 55.25 29.4375C54.5599 28.8776 53.9805 28.1549 53.5117 27.2695C53.043 26.3711 52.8086 25.2839 52.8086 24.0078C52.8086 23.3047 52.9323 22.543 53.1797 21.7227C53.4271 20.9023 53.8242 20.1471 54.3711 19.457C54.931 18.7539 55.6536 18.168 56.5391 17.6992C57.4375 17.2305 58.5247 16.9961 59.8008 16.9961H68.9609V21.8398H59.8008C59.1107 21.8398 58.5768 22.0547 58.1992 22.4844C57.8216 22.901 57.6328 23.4219 57.6328 24.0469C57.6328 24.7109 57.8477 25.2318 58.2773 25.6094C58.7201 25.974 59.2409 26.1562 59.8398 26.1562H68.9609C69.651 26.1562 70.1849 25.9479 70.5625 25.5312C70.9401 25.1146 71.1289 24.5938 71.1289 23.9688V16.8789C71.1289 16.2148 70.9206 15.6875 70.5039 15.2969C70.1003 14.9062 69.5859 14.7109 68.9609 14.7109H57.8086V9.88672H68.9609C69.6641 9.88672 70.4193 10.0104 71.2266 10.2578C72.0469 10.5052 72.8021 10.9089 73.4922 11.4688C74.1953 12.0156 74.7812 12.7383 75.25 13.6367C75.7188 14.5221 75.9531 15.6029 75.9531 16.8789V24.0078Z" fill="#fd6ba8"/>
              <path d="M99.4102 14.9648H90.543V31H85.4062V14.9648H78.8047V9.88672H85.4062V2.99219H90.543V9.88672H99.4102V14.9648Z" fill="#fd6ba8"/>
          </svg>
          <svg viewBox="0 0 100 31" fill="none" class="pur-chat chat">
              <path d="M21.832 31H8.0625C7.35938 31 6.59115 30.8763 5.75781 30.6289C4.92448 30.3815 4.14974 29.9779 3.43359 29.418C2.73047 28.8451 2.13802 28.1094 1.65625 27.2109C1.1875 26.2995 0.953125 25.1862 0.953125 23.8711V16.9961C0.953125 16.5143 1.00521 16.0065 1.10938 15.4727C1.22656 14.9388 1.40234 14.4115 1.63672 13.8906C1.87109 13.3568 2.17057 12.849 2.53516 12.3672C2.91276 11.8854 3.36198 11.4622 3.88281 11.0977C4.41667 10.7331 5.02865 10.4401 5.71875 10.2188C6.40885 9.9974 7.1901 9.88672 8.0625 9.88672H21.832V14.9648H8.0625C7.39844 14.9648 6.89062 15.1341 6.53906 15.4727C6.20052 15.8112 6.03125 16.332 6.03125 17.0352V23.8711C6.03125 24.5352 6.20703 25.043 6.55859 25.3945C6.91016 25.7461 7.42448 25.9219 8.10156 25.9219H21.832V31Z" fill="#c97fd6"/>
              <path d="M49.5078 31H44.4297V16.9961C44.4297 16.332 44.2604 15.8307 43.9219 15.4922C43.5833 15.1406 43.0755 14.9648 42.3984 14.9648H33.2383V9.88672H42.3984C42.8802 9.88672 43.388 9.94531 43.9219 10.0625C44.4557 10.1667 44.9831 10.3359 45.5039 10.5703C46.0378 10.8047 46.5456 11.1107 47.0273 11.4883C47.5091 11.8529 47.9323 12.3021 48.2969 12.8359C48.6615 13.3568 48.9544 13.9622 49.1758 14.6523C49.3971 15.3424 49.5078 16.1237 49.5078 16.9961V31ZM31.1875 31H26.1094V0.960938H31.1875V31Z" fill="#c97fd6"/>
              <path d="M75.9531 24.0078C75.9531 24.7109 75.8294 25.4727 75.582 26.293C75.3346 27.1003 74.931 27.8555 74.3711 28.5586C73.8242 29.2487 73.1016 29.8281 72.2031 30.2969C71.3177 30.7656 70.237 31 68.9609 31H59.8008C59.0977 31 58.3359 30.8763 57.5156 30.6289C56.7083 30.3815 55.9531 29.9844 55.25 29.4375C54.5599 28.8776 53.9805 28.1549 53.5117 27.2695C53.043 26.3711 52.8086 25.2839 52.8086 24.0078C52.8086 23.3047 52.9323 22.543 53.1797 21.7227C53.4271 20.9023 53.8242 20.1471 54.3711 19.457C54.931 18.7539 55.6536 18.168 56.5391 17.6992C57.4375 17.2305 58.5247 16.9961 59.8008 16.9961H68.9609V21.8398H59.8008C59.1107 21.8398 58.5768 22.0547 58.1992 22.4844C57.8216 22.901 57.6328 23.4219 57.6328 24.0469C57.6328 24.7109 57.8477 25.2318 58.2773 25.6094C58.7201 25.974 59.2409 26.1562 59.8398 26.1562H68.9609C69.651 26.1562 70.1849 25.9479 70.5625 25.5312C70.9401 25.1146 71.1289 24.5938 71.1289 23.9688V16.8789C71.1289 16.2148 70.9206 15.6875 70.5039 15.2969C70.1003 14.9062 69.5859 14.7109 68.9609 14.7109H57.8086V9.88672H68.9609C69.6641 9.88672 70.4193 10.0104 71.2266 10.2578C72.0469 10.5052 72.8021 10.9089 73.4922 11.4688C74.1953 12.0156 74.7812 12.7383 75.25 13.6367C75.7188 14.5221 75.9531 15.6029 75.9531 16.8789V24.0078Z" fill="#c97fd6"/>
              <path d="M99.4102 14.9648H90.543V31H85.4062V14.9648H78.8047V9.88672H85.4062V2.99219H90.543V9.88672H99.4102V14.9648Z" fill="#c97fd6"/>
          </svg>
      </div>
    `,
    8: `
      <div class="skin">
          <div class="eye">
              <p class="shazam">shazam</p>
              <div class="pupil">
                  <div class="black"></div>
              </div>
          </div>
      </div>
    `,
  },
  1: {
    0: `<img src="assets/stub.png" alt="stub">`,
    1: ``,
    2: `<img src="assets/stub.png" alt="stub">`,
    3: ``,
    4: `<img src="assets/stub.png" alt="stub">`,
    5: ``,
    6: `<img src="assets/stub.png" alt="stub">`,
    7: ``,
    8: `<img src="assets/stub.png" alt="stub">`,
  },
  2: {
    0: ``,
    1: `<img src="assets/stub.png" alt="stub">`,
    2: ``,
    3: `<img src="assets/stub.png" alt="stub">`,
    4: ``,
    5: `<img src="assets/stub.png" alt="stub">`,
    6: ``,
    7: `<img src="assets/stub.png" alt="stub">`,
    8: ``,
  },
}

pageIndicators[0].style = 'background-color: #fff; transform: scale(1.2)';

function switchAction() {
  for (let i = 0; i < pageIndicators.length; i++) pageIndicators[i].style = '';
  pageIndicators[currentPage].style = 'background-color: #fff; transform: scale(1.2)';

  for (let i = 0; i < hex.length; i++) {
    while (hex[i].children.length) {
      hex[i].removeChild(hex[i].lastChild);
    }
    hex[i].innerHTML = hexContents[currentPage][i];
  }

  if (eyeBeingTracked && currentPage !== 0) {
    eyeBeingTracked = false;
    document.body.removeEventListener('mousemove', mouseTracker);
  }
  if (currentPage === 0 && !eyeBeingTracked) setTimeout(() => document.body.addEventListener('mousemove', mouseTracker), 3000);
}

function switcher() {
  let div = document.createElement('div');
  div.className = 'colorer';
  this.appendChild(div);
  setTimeout(() => this.removeChild(div), 1000);
}

function switcherRight() {
  currentPage = (currentPage + 1) % totalPages;
  right = true;
  switchAction();
}
function switcherLeft() {
  currentPage = (currentPage + totalPages - 1) % totalPages;
  right = false;
  switchAction();
}

for (let i = 0; i < pageIndicators.length; i++) pageIndicators[i].addEventListener('click', () => {
  currentPage = i;
  switchAction();
});