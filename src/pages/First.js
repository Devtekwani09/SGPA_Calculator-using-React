import React, { useState } from 'react';

const First = () => {
    const [formdata, setFormData] = useState({ maths: "", phyche:"", cshv:"", ppsbme:"", beebce:"", phychelab:"", lhvlab:"", cpmplab:"", beebcelab:"", caegcamdlab:"", deca:"" });

    // Function to handle changes in the select dropdown
    const changeHandler = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formdata, [name]: value });
    }
    console.log(formdata);

    const [sgpa, setSgpa] = useState("");

    function submitHandler(event){
        event.preventDefault();

        console.log("function called");
            var gradeMap = {
                'A++': 10.0,
                'A+': 9.0,
                'A': 8.5,
                'B+': 8.0,
                'B': 7.5,
                'C+': 7.0,
                'C': 6.5,
                'D+': 6.0,
                'D': 5.5,
                'E+': 5.0,
                'E': 5.0,
                'F': 0.0
            };

            var creditHours = {
                'subject1': 4.0,
                'subject2': 4.0,
                'subject3': 2.0,
                'subject4': 2.0,
                'subject5': 2.0,
                'subject6': 1.0,
                'subject7': 1.0,
                'subject8': 1.5,
                'subject9': 1.0,
                'subject10': 1.5,
                'subject11': 0.5,
            };

            var subject1Grade = gradeMap[formdata.maths];
            var subject2Grade = gradeMap[formdata.phyche];
            var subject3Grade = gradeMap[formdata.cshv];
            var subject4Grade = gradeMap[formdata.ppsbme];
            var subject5Grade = gradeMap[formdata.beebce];
            var subject6Grade = gradeMap[formdata.phychelab];
            var subject7Grade = gradeMap[formdata.lhvlab];
            var subject8Grade = gradeMap[formdata.cpmplab];
            var subject9Grade = gradeMap[formdata.beebcelab];
            var subject10Grade = gradeMap[formdata.caegcamdlab];
            var subject11Grade = gradeMap[formdata.deca];

            

            var totalGradePoints = subject1Grade * creditHours['subject1'] +
                                   subject2Grade * creditHours['subject2'] +
                                   subject3Grade * creditHours['subject3'] +
                                   subject4Grade * creditHours['subject4'] +
                                   subject5Grade * creditHours['subject5'] +
                                   subject6Grade * creditHours['subject6'] +
                                   subject7Grade * creditHours['subject7'] +
                                   subject8Grade * creditHours['subject8'] +
                                   subject9Grade * creditHours['subject9'] +
                                   subject10Grade * creditHours['subject10'] +
                                   subject11Grade * creditHours['subject11'] ;

            var totalCreditHours = creditHours['subject1'] + creditHours['subject2'] + creditHours['subject3'] + creditHours['subject4'] + creditHours['subject5'] + creditHours['subject6'] + creditHours['subject7'] + creditHours['subject8'] + creditHours['subject9'] + creditHours['subject10'] + creditHours['subject11'];

            var sgpa = totalGradePoints / totalCreditHours;


            setSgpa(sgpa);

           
    }

    return (
        <div className="flex flex-col justify-center items-center">
        <h1 className='text-lg font-bold text-white'> First Year </h1>
        <div>
            <form className="flex flex-col w-full max-w-md p-5 bg-[#972fff] mt-3 gap-2 rounded-md" onSubmit={submitHandler}>
                <label htmlFor="maths" className="self-start">Engineering Mathematics-I / Engineering Mathematics-II </label>
                <select
                    className="border rounded-md w-[100] h-8 p-1 hover:shadow-lg"
                    name="maths"
                    onChange={changeHandler}
                    value={formdata.maths}
                    id="maths"
                    required
                >
                    <option value="">Open this select menu</option>
                    <option value="A++">A++</option>
                    <option value="A+">A+</option>
                    <option value="A">A</option>
                    <option value="B+">B+</option>
                    <option value="B">B</option>
                    <option value="C+">C+</option>
                    <option value="C">C</option>
                    <option value="D+">D+</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                    <option value="F">F</option>
                </select>

                <label htmlFor="phyche" className="self-start">Engineering Physics / Engineering Chemistry : </label>
                <select
                    className="border rounded-md w-[100] h-8 p-1 hover:shadow-lg"
                    name="phyche"
                    onChange={changeHandler}
                    value={formdata.phyche}
                    id="phyche"
                    required
                >
                    <option value="">Open this select menu</option>
                    <option value="A++">A++</option>
                    <option value="A+">A+</option>
                    <option value="A">A</option>
                    <option value="B+">B+</option>
                    <option value="B">B</option>
                    <option value="C+">C+</option>
                    <option value="C">C</option>
                    <option value="D+">D+</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                    <option value="F">F</option>
                </select>

                <label htmlFor="cshv" className="self-start">Communication Skills / Human Values : </label>
                <select
                    className="border rounded-md w-[100] h-8 p-1 hover:shadow-lg"
                    name="cshv"
                    onChange={changeHandler}
                    value={formdata.cshv}
                    id="cshv"
                    required
                >
                    <option value="">Open this select menu</option>
                    <option value="A++">A++</option>
                    <option value="A+">A+</option>
                    <option value="A">A</option>
                    <option value="B+">B+</option>
                    <option value="B">B</option>
                    <option value="C+">C+</option>
                    <option value="C">C</option>
                    <option value="D+">D+</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                    <option value="F">F</option>
                </select>

                <label htmlFor="ppsbme" className="self-start">Programming for Problem Solving / Basic Mechanical Engineering : </label>
                <select
                    className="border rounded-md w-[100] h-8 p-1 hover:shadow-lg"
                    name="ppsbme"
                    onChange={changeHandler}
                    value={formdata.ppsbme}
                    id="ppsbme"
                    required
                >
                    <option value="">Open this select menu</option>
                    <option value="A++">A++</option>
                    <option value="A+">A+</option>
                    <option value="A">A</option>
                    <option value="B+">B+</option>
                    <option value="B">B</option>
                    <option value="C+">C+</option>
                    <option value="C">C</option>
                    <option value="D+">D+</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                    <option value="F">F</option>
                </select>

                <label htmlFor="beebce" className="self-start">Basic Electrical Engineering / Basic Civil Engineering :  </label>
                <select
                    className="border rounded-md w-[100] h-8 p-1 hover:shadow-lg"
                    name="beebce"
                    onChange={changeHandler}
                    value={formdata.beebce}
                    id="beebce"
                    required
                >
                    <option value="">Open this select menu</option>
                    <option value="A++">A++</option>
                    <option value="A+">A+</option>
                    <option value="A">A</option>
                    <option value="B+">B+</option>
                    <option value="B">B</option>
                    <option value="C+">C+</option>
                    <option value="C">C</option>
                    <option value="D+">D+</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                    <option value="F">F</option>
                </select>

                <h1> Practicals </h1>

                <label htmlFor="phychelab" className="self-start">Engineering Physics Lab / Engineering Chemistry Lab : </label>
                <select
                    className="border rounded-md w-[100] h-8 p-1 hover:shadow-lg"
                    name="phychelab"
                    onChange={changeHandler}
                    value={formdata.phychelab}
                    id="phychelab"
                    required
                >
                    <option value="">Open this select menu</option>
                    <option value="A++">A++</option>
                    <option value="A+">A+</option>
                    <option value="A">A</option>
                    <option value="B+">B+</option>
                    <option value="B">B</option>
                    <option value="C+">C+</option>
                    <option value="C">C</option>
                    <option value="D+">D+</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                    <option value="F">F</option>
                </select>

                

                <label htmlFor="lhvlab" className="self-start">Language Lab / Human Values Activities and Sports : </label>
                <select
                    className="border rounded-md w-[100] h-8 p-1 hover:shadow-lg"
                    name="lhvlab"
                    onChange={changeHandler}
                    value={formdata.lhvlab}
                    id="lhvlab"
                    required
                >
                    <option value="">Open this select menu</option>
                    <option value="A++">A++</option>
                    <option value="A+">A+</option>
                    <option value="A">A</option>
                    <option value="B+">B+</option>
                    <option value="B">B</option>
                    <option value="C+">C+</option>
                    <option value="C">C</option>
                    <option value="D+">D+</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                    <option value="F">F</option>
                </select>

                <label htmlFor="cpmplab" className="self-start">Computer Programming Lab / Manufacturing Practices Workshop : </label>
                <select
                    className="border rounded-md w-[100] h-8 p-1 hover:shadow-lg"
                    name="cpmplab"
                    onChange={changeHandler}
                    value={formdata.cpmplab}
                    id="cpmplab"
                    required
                >
                    <option value="">Open this select menu</option>
                    <option value="A++">A++</option>
                    <option value="A+">A+</option>
                    <option value="A">A</option>
                    <option value="B+">B+</option>
                    <option value="B">B</option>
                    <option value="C+">C+</option>
                    <option value="C">C</option>
                    <option value="D+">D+</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                    <option value="F">F</option>
                </select>

                <label htmlFor="beebcelab" className="self-start">Basic Electrical Engineering Lab / Basic Civil Engineering Lab : </label>
                <select
                    className="border rounded-md w-[100] h-8 p-1 hover:shadow-lg"
                    name="beebcelab"
                    onChange={changeHandler}
                    value={formdata.beebcelab}
                    id="beebcelab"
                    required
                >
                    <option value="">Open this select menu</option>
                    <option value="A++">A++</option>
                    <option value="A+">A+</option>
                    <option value="A">A</option>
                    <option value="B+">B+</option>
                    <option value="B">B</option>
                    <option value="C+">C+</option>
                    <option value="C">C</option>
                    <option value="D+">D+</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                    <option value="F">F</option>
                </select>

                <label htmlFor="caegcamdlab" className="self-start">Computer Aided Engineering Graphics / Computer Aided Machine Drawing : </label>
                <select
                    className="border rounded-md w-[100] h-8 p-1 hover:shadow-lg"
                    name="caegcamdlab"
                    onChange={changeHandler}
                    value={formdata.caegcamdlab}
                    id="caegcamdlab"
                    required
                >
                    <option value="">Open this select menu</option>
                    <option value="A++">A++</option>
                    <option value="A+">A+</option>
                    <option value="A">A</option>
                    <option value="B+">B+</option>
                    <option value="B">B</option>
                    <option value="C+">C+</option>
                    <option value="C">C</option>
                    <option value="D+">D+</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                    <option value="F">F</option>
                </select>

                <label htmlFor="dmct" className="self-start">DECA : </label>
                <select
                    className="border rounded-md w-[100] h-8 p-1 hover:shadow-lg"
                    name="deca"
                    onChange={changeHandler}
                    value={formdata.deca}
                    id="deca"
                    required
                >
                    <option value="">Open this select menu</option>
                    <option value="A++">A++</option>
                    <option value="A+">A+</option>
                    <option value="A">A</option>
                    <option value="B+">B+</option>
                    <option value="B">B</option>
                    <option value="C+">C+</option>
                    <option value="C">C</option>
                    <option value="D+">D+</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                    <option value="F">F</option>
                </select>

                <button className='w-[5vw] bg-[#3a304a] self-center h-[5vh] rounded-md hover:bg-[#292136] text-white'>Submit</button>

            </form>

            <div className="flex justify-center items-center bg-[#972fff] h-[8vh] mt-4 mb-4 rounded-lg text-white">
            <p>sgpa: {sgpa}</p>
            </div>
        </div>
        </div>
    );
}

export default First;