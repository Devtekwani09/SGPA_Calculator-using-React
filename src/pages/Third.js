import React, { useState } from 'react';

const Fifth = () => {
    const [formdata, setFormData] = useState({ aem: "", tcmefa:"", de:"", dsa:"", oop:"", se:"", dsalab:"", ooplab:"", selab:"", delab:"", its:"", deca:"" });

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
                'subject1': 3.0,
                'subject2': 2.0,
                'subject3': 3.0,
                'subject4': 3.0,
                'subject5': 3.0,
                'subject6': 3.0,
                'subject7': 1.5,
                'subject8': 1.5,
                'subject9': 1.5,
                'subject10': 1.5,
                'subject11': 1.0,
                'subject12': 0.5,
            };

            var subject1Grade = gradeMap[formdata.dmct];
            var subject2Grade = gradeMap[formdata.cd];
            var subject3Grade = gradeMap[formdata.os];
            var subject4Grade = gradeMap[formdata.cgmt];
            var subject5Grade = gradeMap[formdata.aoa];
            var subject6Grade = gradeMap[formdata.opt];
            var subject7Grade = gradeMap[formdata.cgmtlab];
            var subject8Grade = gradeMap[formdata.cdlab];
            var subject9Grade = gradeMap[formdata.aoalab];
            var subject10Grade = gradeMap[formdata.javalab];
            var subject11Grade = gradeMap[formdata.its];
            var subject12Grade = gradeMap[formdata.deca];

            

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
                                   subject11Grade * creditHours['subject11'] +
                                   subject12Grade * creditHours['subject12'];

            var totalCreditHours = creditHours['subject1'] + creditHours['subject2'] + creditHours['subject3'] + creditHours['subject4'] + creditHours['subject5'] + creditHours['subject6'] + creditHours['subject7'] + creditHours['subject8'] + creditHours['subject9'] + creditHours['subject10'] + creditHours['subject11'] + creditHours['subject12'];

            var sgpa = totalGradePoints / totalCreditHours;


            setSgpa(sgpa);

           
    }

    return (
        <div className="flex flex-col justify-center items-center">
        <h1 className='text-lg font-bold text-white'> Semester - 5 </h1>
        <div>
            <form className="flex flex-col w-full max-w-md p-5 bg-[#972fff] mt-3 gap-2 rounded-md" onSubmit={submitHandler}>
                <label htmlFor="aem" className="self-start">Advanced Engineering Mathematics : </label>
                <select
                    className="border rounded-md w-[100] h-8 p-1 hover:shadow-lg"
                    name="aem"
                    onChange={changeHandler}
                    value={formdata.aem}
                    id="aem"
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

                <label htmlFor="tcmefa" className="self-start">Technical Communication / Managerial Economics and Financial Accounting : </label>
                <select
                    className="border rounded-md w-[100] h-8 p-1 hover:shadow-lg"
                    name="tcmefa"
                    onChange={changeHandler}
                    value={formdata.tcmefa}
                    id="tcmefa"
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

                <label htmlFor="de" className="self-start">Digital Electronics : </label>
                <select
                    className="border rounded-md w-[100] h-8 p-1 hover:shadow-lg"
                    name="de"
                    onChange={changeHandler}
                    value={formdata.de}
                    id="de"
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

                <label htmlFor="dsa" className="self-start">Data Structures and Algorithms : </label>
                <select
                    className="border rounded-md w-[100] h-8 p-1 hover:shadow-lg"
                    name="dsa"
                    onChange={changeHandler}
                    value={formdata.dsa}
                    id="dsa"
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

                <label htmlFor="oop" className="self-start">Object Oriented Programming : </label>
                <select
                    className="border rounded-md w-[100] h-8 p-1 hover:shadow-lg"
                    name="oop"
                    onChange={changeHandler}
                    value={formdata.oop}
                    id="oop"
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

                <label htmlFor="se" className="self-start">Software Engineering : </label>
                <select
                    className="border rounded-md w-[100] h-8 p-1 hover:shadow-lg"
                    name="se"
                    onChange={changeHandler}
                    value={formdata.se}
                    id="se"
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

                <label htmlFor="dsalab" className="self-start">Data Structures and Algorithms Lab : </label>
                <select
                    className="border rounded-md w-[100] h-8 p-1 hover:shadow-lg"
                    name="dsalab"
                    onChange={changeHandler}
                    value={formdata.dsalab}
                    id="dsalab"
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

                <label htmlFor="ooplab" className="self-start">Object Oriented Programming Lab :</label>
                <select
                    className="border rounded-md w-[100] h-8 p-1 hover:shadow-lg"
                    name="ooplab"
                    onChange={changeHandler}
                    value={formdata.ooplab}
                    id="ooplab"
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

                <label htmlFor="selab" className="self-start">Software Engineering Lab : </label>
                <select
                    className="border rounded-md w-[100] h-8 p-1 hover:shadow-lg"
                    name="selab"
                    onChange={changeHandler}
                    value={formdata.selab}
                    id="selab"
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

                <label htmlFor="delab" className="self-start">Digital Electronics Lab : </label>
                <select
                    className="border rounded-md w-[100] h-8 p-1 hover:shadow-lg"
                    name="delab"
                    onChange={changeHandler}
                    value={formdata.delab}
                    id="delab"
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

                <label htmlFor="its" className="self-start">Industrial Training : </label>
                <select
                    className="border rounded-md w-[100] h-8 p-1 hover:shadow-lg"
                    name="its"
                    onChange={changeHandler}
                    value={formdata.its}
                    id="its"
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

export default Fifth;
