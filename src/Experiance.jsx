function Experiance(){
  return(
    <>
      <div className="m-6 p-3 bg-aliceblue rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">Programming Experiance</h2>
      </div>
      <div className="m-6 p-3 bg-aliceblue rounded-lg shadow-md">
        <table>
          <thead className="bg-lightblue">
            <tr>
              <th className="font-bold">Programming Language</th>
              <th className="font-bold">Years Experiance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Python</th>
              <th>3 Years</th>
            </tr>
            <tr >
              <th>HTML, Javascript, CSS</th>
              <th>1.5 Years</th>
            </tr>
            <tr >
              <th>React</th>
              <th>1 Month</th>
            </tr>
            <tr >
              <th>C#</th>
              <th>6 Months</th>
            </tr>
            <tr >
              <th>Java</th>
              <th>3 Years</th>
            </tr>
          </tbody>
        </table>
      </div>




    <div className="m-6 p-3 bg-aliceblue rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 text-center">College Experiance</h2>
    </div>
    <div className="m-6 p-3 bg-aliceblue rounded-lg shadow-md mb-14">
    <h3 className="font-bold">First Semester Classes (fall of 2023)</h3>
      <ul className="list-disc ml-6">
        <li>COMM-101 - 013W - Fund of Oral Communication</li>
        <li>CPSC-111 - 001 - Intro to Python Programming</li>
        <li>CWI-101 - 001W - CWI Pathways Explore Careers</li>
        <li>ENGL-101 - 044R - Writing and Rhetoric I</li>
        <li>MATH-143 - 014W - College Algebra</li>
      </ul>

      <h3 className="font-bold">Second Semester Classes (summer of 2024)</h3>
      <ul className="list-disc ml-6">
        <li>PHIL-103-003W-8W: Introduction to Ethics</li>
        <li>PHIL-111-001W-8W: World Religions</li>
      </ul>

      <h3 className="font-bold">Third Semester Classes (fall of 2024)</h3>
      <ul className="list-disc ml-6">
        <li>SWDV-105-001F-8W1: Intro to Programming</li>
        <li>SWDV-110-001F-8W2: Intermediate Programming</li>
        <li>SWDV-115-001H-16W: Web Application Development</li>
      </ul>

      <h3 className="font-bold">Fourth Semester Classes (spring of 2025)</h3>
      <ul className="list-disc ml-6">
        <li>SWDV-140-001F-8W1: Intermediate Web App Development</li>
        <li>SWDV-143-001F-8W2: Client Side Frameworks</li>
        <li>SWDV-152-001F-16W: Systems Analysis and Design</li>
      </ul>
    </div>
    </>
  );
}

export default Experiance;