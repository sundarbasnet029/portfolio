import profileImg from "../Assets/profileImg.png";

export function Profile(){
    return(
        <section className="flex flex-col items-start gap-4 px-8 py-16 bg-bg-0">
          <div className="flex flex-col items-start gap-[15px] self-stretch">
            <div className="size-12 overflow-hidden rounded-[9.6px]">
              <img
                src={profileImg}
                alt="Sundar Basnet"
                className="profile-image"
              />
            </div>
            <div className="flex flex-col self-stretch">
              <h1 className="text-text-primary text-16-medium">
                Sundar Basnet
              </h1>
              <p className="text-text-secondary text-14-regular">
                Product Designer
              </p>
            </div>
          </div>
          <p className="text-text-secondary text-14-regular">
            Currently working as UX/UX designer at Codavatar, primarily focusing
            on WebApp for Dialaxy and Startup ‘Airchannel.
          </p>
        </section>
    )
}