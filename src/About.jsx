function About() {
  return (
    <>
      <section id="about" className="text-gray-700 text-center">
        <div className="m-6 p-3 bg-aliceblue rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 text-center">
            About Me
          </h2>
        </div>
        <div className="m-6 p-6 bg-aliceblue rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 text-center">
            Hello, My name is Jonathan Pope
          </h3>
          <p>
            I am an Idaho based programmer with experience with several
            programming languages. I am also interested in Motorcycles, Music,
            and Video Games.
          </p>
        </div>

        <div className="m-6 p-6 bg-aliceblue rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 text-center">
            Music
          </h3>
          <p>
            Music has been a big part of my life for quite some time. Having
            mostly listened to "mainstream" music until i got into metal in
            highschool, my music taste has evolved over the last 10 years. Some
            of my favorite albums include:
          </p>
          <ul>
            <li>Won't Be Soon Before To Long - Maroon 5</li>
            <li>Eternal Blue - Spiritbox</li>
            <li>Jinkougaku - Zutomayo</li>
            <li>Afterwards - Suisoh</li>
            <li>Creation - IsekaiJoucho</li>
          </ul>
        </div>

        <div className="m-6 p-6 bg-aliceblue rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 text-center">
            Motorcycles
          </h3>
          <p>
            I have been riding a motorcycle since Novemebt of 2024. I started on
            a Honda Navi (a small 112cc scooter shaped like a proper motorcycle)
            and then purchased a Husqavarna Vitpilen 401. Riding is my favorite
            mode of transportation as I find driving to be a boring and tedious
            mode of transport. My favorite motorcycles are:
          </p>
          <ul>
            <li>Triumph Daytona 660</li>
            <li>Honda CBR250RR Fireblade</li>
            <li>Kawasaki ZX25R</li>
          </ul>
        </div>

        <div className="m-6 p-6 mb-14 bg-aliceblue rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 text-center">
            Video Games
          </h3>
          <p>
            Video Games have been a big part of my life growing up as they have
            been the main way i have "killed time". Games have been my go to
            activity when i can't think of anything else to do. Whether or not it
            was the best idea(especially when I had homework) is up for debate. Some of my favorite games include:
          </p>
          <ul>
            <li>Team Fortress 2</li>
            <li>Balatro</li>
            <li>Celeste</li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default About;
