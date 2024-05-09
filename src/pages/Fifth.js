import React, { useState } from 'react';

const Fifth = () => {
    const [formdata, setFormData] = useState({ dmct: "", cd:"", os:"", cgmt:"", aoa:"", opt:"", cgmtlab:"", cdlab:"", aoalab:"", javalab:"", its:"", deca:"" });

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
                'subject1': 2.0,
                'subject2': 3.0,
                'subject3': 3.0,
                'subject4': 3.0,
                'subject5': 3.0,
                'subject6': 2.0,
                'subject7': 1.0,
                'subject8': 1.0,
                'subject9': 1.0,
                'subject10': 1.0,
                'subject11': 2.5,
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
                <label htmlFor="dmct" className="self-start">Data Mining-Concepts and Techniques : </label>
                <select
                    className="border rounded-md w-[100] h-8 p-1 hover:shadow-lg"
                    name="dmct"
                    onChange={changeHandler}
                    value={formdata.dmct}
                    id="dmct"
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

                <label htmlFor="cd" className="self-start">Compiler Design : </label>
                <select
                    className="border rounded-md w-[100] h-8 p-1 hover:shadow-lg"
                    name="cd"
                    onChange={changeHandler}
                    value={formdata.cd}
                    id="cd"
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

                <label htmlFor="os" className="self-start">Operating System : </label>
                <select
                    className="border rounded-md w-[100] h-8 p-1 hover:shadow-lg"
                    name="os"
                    onChange={changeHandler}
                    value={formdata.os}
                    id="os"
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

                <label htmlFor="cgmt" className="self-start">Computer Graphics & Multimedia : </label>
                <select
                    className="border rounded-md w-[100] h-8 p-1 hover:shadow-lg"
                    name="cgmt"
                    onChange={changeHandler}
                    value={formdata.cgmt}
                    id="cgmt"
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

                <label htmlFor="aoa" className="self-start">Analysis of Algorithm : </label>
                <select
                    className="border rounded-md w-[100] h-8 p-1 hover:shadow-lg"
                    name="aoa"
                    onChange={changeHandler}
                    value={formdata.aoa}
                    id="aoa"
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

                <label htmlFor="opt" className="self-start">Fundamentals of Blockchain / Mathematical Modelling for Data Science / Programming for Data Sciences : </label>
                <select
                    className="border rounded-md w-[100] h-8 p-1 hover:shadow-lg"
                    name="opt"
                    onChange={changeHandler}
                    value={formdata.opt}
                    id="opt"
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

                <label htmlFor="cgmtlab" className="self-start">Computer Graphics & Multimedia Lab : </label>
                <select
                    className="border rounded-md w-[100] h-8 p-1 hover:shadow-lg"
                    name="cgmtlab"
                    onChange={changeHandler}
                    value={formdata.cgmtlab}
                    id="cgmtlab"
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

                <label htmlFor="cdlab" className="self-start">Compiler Design Lab :</label>
                <select
                    className="border rounded-md w-[100] h-8 p-1 hover:shadow-lg"
                    name="cdlab"
                    onChange={changeHandler}
                    value={formdata.cdlab}
                    id="cdlab"
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

                <label htmlFor="aoalab" className="self-start">Analysis of Algorithm Lab : </label>
                <select
                    className="border rounded-md w-[100] h-8 p-1 hover:shadow-lg"
                    name="aoalab"
                    onChange={changeHandler}
                    value={formdata.aoalab}
                    id="aoalab"
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

                <label htmlFor="javalab" className="self-start">Advanced Java Lab : </label>
                <select
                    className="border rounded-md w-[100] h-8 p-1 hover:shadow-lg"
                    name="javalab"
                    onChange={changeHandler}
                    value={formdata.javalab}
                    id="javalab"
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
