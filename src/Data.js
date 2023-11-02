import React from "react";
import'./Data.css'
import MyBar from './MyBar';
import logo from './images/000046.JPG';
import picgam from './images/unity.png';
import picgam1 from './images/image (7).png';
import picgam2 from './images/image (8).png';
import picgam3 from './images/image (9).png';
function Data()
{
    return(
        <>
        <div >
          <div class="hero min-h-screen bg-base-100" style={{ backgroundImage: `url('/images/df51560cfc772933996e2c99317e11e1.jpg')` }}>
            <div class="hero-content text-center">
            <div class="max-md">
            <h1 class="font-effect-shadow-multiple text-9xl/[72px] text-base-100  font-bold  ">Welcome Everyone</h1>
            <p  class=" font-Pacifico py-9 text-4xl text-White font-bold ">This is website for My portfolio</p>
            </div>
            </div>
          </div>
        </div>
        <div class="drawer-content flex flex-col items-left justify-left">
            
        <div id="about" >
        <p>
            <div class="card card-side bg-neutral-focus shadow-xl">
              <div class="card-body">
                <h2 class="card-title text-xl/[72px]">About Me</h2>
                <p>สวัสดีครับผมชื่อ ธนภัทร โพธิ์มาก ชื่อเล่น ฟลุ๊ค <br/> 
                เกิดวันที่ 29 มีนาคม 2548 กรุ๊ปเลือด B <br/>
                 ชอบดูหนัง ฟังเพลง ดูanime เป็นคนเฟรนลี่ เข้ากับคนง่าย <br/>
                 facebook : Fluk'iz Tanphat <br/>
                 IG : _32671<br/>
                 GMAIL : tanaphat255900@gmail.com<br/>
                 </p>        
              </div>
              <figure>
                  <div class="avatar">
                    <div class="w-72 rounded-xl">
                      <img src={logo} />
                    </div>
                  </div>
              </figure>
            </div>
        </p>
        </div>


        <section id="education">
        <p >
        <div class="card card-side bg-neutral-focus shadow-xl">
              <ul class="steps steps-vertical">
                <li class="step step-primary">  KPP </li>
                <li class="step step-primary">Kmutt</li>
                <li class="step ">Work for Coffee</li>
              </ul>
              <div class="card-body">
                <h2 class="card-title text-xl/[72px]">Education</h2>
                <p>กำลังศึกษาอยู่คณะวิศวกรรมคอมพิวเตอร์ ชั้นปีที่1<br/>
            ที่มหาลัยพระจอมเกล้าธนบุรี <br/>
            จบจากโรงเรียนกำแพงเพชรพิทยาคม  GPA:3.88</p>
              </div>
            </div>
        </p>
    </section>
    <section id="skills">
        <p >
        <div class="card card-side bg-neutral-focus shadow-xl">
              <div class="card-body ">
                <h1 class="card-title text-4xl/[144px] justify-center ">Skills</h1>
                <h2 class="card-title text-2xl/[36px] ">Unity(C#)</h2>
                <div class="carousel w-full">
                  <div id="slide1" class="carousel-item relative w-full">
                  <a href="https://unnormalized.itch.io/hamster-club-quest-punk-city"><img src={picgam} class="w-full" /></a>
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                      <a href="#slide4" class="btn btn-circle">❮</a> 
                      <a href="#slide2" class="btn btn-circle">❯</a>
                    </div>
                  </div> 
                  <div id="slide2" class="carousel-item relative w-full">
                  <a href="https://unnormalized.itch.io/hamster-club-quest-punk-city"><img src={picgam1} class="w-full" /></a>
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                      <a href="#slide1" class="btn btn-circle">❮</a> 
                      <a href="#slide3" class="btn btn-circle">❯</a>
                    </div>
                  </div> 
                  <div id="slide3" class="carousel-item relative w-full">
                    <a href="https://unnormalized.itch.io/hamster-club-quest-punk-city"><img src={picgam2} class="w-full"  /></a>
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                      <a href="#slide2" class="btn btn-circle">❮</a> 
                      <a href="#slide4" class="btn btn-circle">❯</a>
                    </div>
                  </div> 
                  <div id="slide4" class="carousel-item relative w-full">
                  <a href="https://unnormalized.itch.io/hamster-club-quest-punk-city"><img src={picgam3} class="w-full" /></a>
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                      <a href="#slide3" class="btn btn-circle">❮</a> 
                      <a href="#slide1" class="btn btn-circle">❯</a>
                    </div>
                  </div>
            </div>
              </div>
            </div>
        </p>        
    </section>
    <section id="Contact">
    <footer class="footer p-10 bg-neutral text-neutral-content " >
    <aside>
      <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" class="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
      <p>MR.Tanphat phomak<br/>since 2005</p>
    </aside> 
        <nav>
          <header class="footer-title">Social</header> 
            <div class="grid grid-flow-col gap-4">
              <a href="https://twitter.com/PhomakTanaphat"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current" ><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a> 
              <a href="https://www.youtube.com/channel/UCXI0hcXsSuDwe9_Sjtzk_WA"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a> 
              <a href="https://www.facebook.com/fluck.phomak/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
              <a href="https://www.twitch.tv/kuroflukz"><svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512" class="fill-current"> <path d="M391.17,103.47H352.54v109.7h38.63ZM285,103H246.37V212.75H285ZM120.83,0,24.31,91.42V420.58H140.14V512l96.53-91.42h77.25L487.69,256V0ZM449.07,237.75l-77.22,73.12H294.61l-67.6,64v-64H140.14V36.58H449.07Z"/></svg></a>
            </div>
          </nav>
        </footer>
    </section>
      </div>
    
        </>
    )
}
export default Data 