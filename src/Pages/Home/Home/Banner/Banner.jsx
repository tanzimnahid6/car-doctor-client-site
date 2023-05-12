import React from "react"
import img1 from "./../../../../../src/assets/images/banner/1.jpg"
import img2 from "./../../../../../src/assets/images/banner/2.jpg"
import img3 from "./../../../../../src/assets/images/banner/3.jpg"
import img4 from "./../../../../../src/assets/images/banner/4.jpg"

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full h-[600px] ">
        <div id="slide1" className="carousel-item relative  w-full">
          <img src={img1} className="w-full object-cover rounded-lg" />

          <div className="absolute rounded-lg h-full flex pl-8 items-center text-white  gap-4  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className=" text-white space-y-7 w-2/3">
              <h2 className="text-6xl font-bold">
                Affordable Price For Car Servicing
              </h2>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <button className="btn btn-error">Discover More</button>
              <button className="btn btn-error btn-outline mx-3">Latest Project</button>
            </div>
          </div>

          <div className="absolute flex justify-center  md:justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative  w-full">
          <img src={img2} className="w-full object-cover rounded-lg" />

          <div className="absolute rounded-lg h-full flex pl-8 items-center text-white  gap-4  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className=" text-white space-y-7 w-2/3">
              <h2 className="text-6xl font-bold">
                Affordable Price For Car Servicing
              </h2>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <button className="btn btn-error">Discover More</button>
              <button className="btn btn-error btn-outline mx-3">Latest Project</button>
            </div>
          </div>

          <div className="absolute flex justify-center  md:justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative  w-full">
          <img src={img3} className="w-full object-cover rounded-lg" />

          <div className="absolute rounded-lg h-full flex pl-8 items-center text-white  gap-4  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className=" text-white space-y-7 w-2/3">
              <h2 className="text-6xl font-bold">
                Affordable Price For Car Servicing
              </h2>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <button className="btn btn-error">Discover More</button>
              <button className="btn btn-error btn-outline mx-3">Latest Project</button>
            </div>
          </div>

          <div className="absolute flex justify-center  md:justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative  w-full">
          <img src={img4} className="w-full object-cover rounded-lg" />

          <div className="absolute rounded-lg h-full flex pl-8 items-center text-white  gap-4  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className=" text-white space-y-7 w-2/3">
              <h2 className="text-6xl font-bold">
                Affordable Price For Car Servicing
              </h2>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <button className="btn btn-error">Discover More</button>
              <button className="btn btn-error btn-outline mx-3">Latest Project</button>
            </div>
          </div>

          <div className="absolute flex justify-center  md:justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
