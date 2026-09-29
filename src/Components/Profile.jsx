import profileImg from "../Assets/profileImg.png";

export function Profile(){
    return(
        <section className="flex flex-col items-start gap-6 px-8 py-16 bg-bg-0">
          <div className="flex flex-col items-start gap-3  ">
            <div>
              <img
                src={profileImg}
                alt="Sundar Basnet"
                className="profile-image size-14 object-cover"
              />
              
            </div>
            <div className="flex flex-col ">
              <h1 className="text-text-primary text-xl font-medium ">
                Sundar Basnet
              </h1>
              <p className="text-text-secondary text-16-regular">
                Product Designer
              </p>
            </div>
          </div>
          <p className="text-text-secondary text-16-regular">
              An aspiring Product Designer trying to figure out design in this fast pace AI world. I have experience with Design System and designing beautiful products without compromising any functionality. I am not afraid of code and am always ready to get my hands dirty.
          </p>
        </section>
    )
}