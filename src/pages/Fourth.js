import React, { useState } from 'react';

const Fourth = () => {
    const [formdata, setFormData] = useState({ dms: "", mefatc:"", mpi:"", dbms:"", toc:"", dccn:"", mpilab:"", dbmslab:"", nplab:"", linuxlab:"", javalab:"", deca:"" });

    // Function to handle changes in the select dropdown
    const changeHandler = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formdata, [name]: value });
    }

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
                'subject7': 1.0,
                'subject8': 1.5,
                'subject9': 1.5,
                'subject10': 1.0,
                'subject11': 1.0,
                'subject12': 0.5,
            };

            var subject1Grade = gradeMap[formdata.dms];
            var subject2Grade = gradeMap[formdata.mefatc];
            var subject3Grade = gradeMap[formdata.mpi];
            var subject4Grade = gradeMap[formdata.dbms];
            var subject5Grade = gradeMap[formdata.toc];
            var subject6Grade = gradeMap[formdata.dccn];
            var subject7Grade = gradeMap[formdata.mpilab];
            var subject8Grade = gradeMap[formdata.dbmslab];
            var subject9Grade = gradeMap[formdata.nplab];
            var subject10Grade = gradeMap[formdata.linuxlab];
            var subject11Grade = gradeMap[formdata.javalab];
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
        <h1 className='text-lg font-bold text-white'> Semester - 4 </h1>
        <div>
            <form className="flex flex-col w-full max-w-md p-5 bg-[#972fff] mt-3 gap-2 rounded-md" onSubmit={submitHandler}>
                <label htmlFor="dms" className="self-start">Discrete Mathematics Structure  : </label>
                <select
                    className="border rounded-md w-[100] h-8 p-1 hover:shadow-lg"
                    name="dms"
                    onChange={changeHandler}
                    value={formdata.dms}
                    id="dms"
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
                    <option value="E+">E+</option>
                    <option value="E">E</option>
                    <option value="F">F</option>
                </select>

                <label htmlFor="mefatc" className="self-start">Managerial Economics and Financial Accounting / Technical Communication :  </label>
                <select
                    className="border rounded-md w-[100] h-8 p-1 hover:shadow-lg"
                    name="mefatc"
                    onChange={changeHandler}
                    value={formdata.mefatc}
                    id="mefatc"
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
                    <option value="E+">E+</option>
                    <option value="E">E</option>
                    <option value="F">F</option>
                </select>

                <label htmlFor="mpi" className="self-start">Microprocessor & Interfaces : </label>
                <select
                    className="border rounded-md w-[100] h-8 p-1 hover:shadow-lg"
                    name="mpi"
                    onChange={changeHandler}
                    value={formdata.mpi}
                    id="mpi"
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
                    <option value="E+">E+</option>
                    <option value="E">E</option>
                    <option value="F">F</option>
                </select>

                <label htmlFor="dbms" className="self-start">Database Management System  : </label>
                <select
                    className="border rounded-md w-[100] h-8 p-1 hover:shadow-lg"
                    name="dbms"
                    onChange={changeHandler}
                    value={formdata.dbms}
                    id="dbms"
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
                    <option value="E+">E+</option>
                    <option value="E">E</option>
                    <option value="F">F</option>
                </select>

                <label htmlFor="toc" className="self-start">Theory of Computation : </label>
                <select
                    className="border rounded-md w-[100] h-8 p-1 hover:shadow-lg"
                    name="toc"
                    onChange={changeHandler}
                    value={formdata.toc}
                    id="toc"
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
                    <option value="E+">E+</option>
                    <option value="E">E</option>
                    <option value="F">F</option>
                </select>

                <label htmlFor="dccn" className="self-start">Data Communication and Computer Networks : </label>
                <select
                    className="border rounded-md w-[100] h-8 p-1 hover:shadow-lg"
                    name="dccn"
                    onChange={changeHandler}
                    value={formdata.dccn}
                    id="dccn"
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
                    <option value="E+">E+</option>
                    <option value="E">E</option>
                    <option value="F">F</option>
                </select>

                <h1> Practicals </h1>

                <label htmlFor="mpilab" className="self-start">Microprocessor & Interfaces Lab : </label>
                <select
                    className="border rounded-md w-[100] h-8 p-1 hover:shadow-lg"
                    name="mpilab"
                    onChange={changeHandler}
                    value={formdata.mpilab}
                    id="mpilab"
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
                    <option value="E+">E+</option>
                    <option value="E">E</option>
                    <option value="F">F</option>
                </select>

                <label htmlFor="dbmslab" className="self-start">Database Management System Lab  :</label>
                <select
                    className="border rounded-md w-[100] h-8 p-1 hover:shadow-lg"
                    name="dbmslab"
                    onChange={changeHandler}
                    value={formdata.dbmslab}
                    id="dbmslab"
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
                    <option value="E+">E+</option>
                    <option value="E">E</option>
                    <option value="F">F</option>
                </select>

                <label htmlFor="nplab" className="self-start">Network Programming Lab  : </label>
                <select
                    className="border rounded-md w-[100] h-8 p-1 hover:shadow-lg"
                    name="nplab"
                    onChange={changeHandler}
                    value={formdata.nplab}
                    id="nplab"
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
                    <option value="E+">E+</option>
                    <option value="E">E</option>
                    <option value="F">F</option>
                </select>

                <label htmlFor="linuxlab" className="self-start">Linux Shell Programming Lab : </label>
                <select
                    className="border rounded-md w-[100] h-8 p-1 hover:shadow-lg"
                    name="linuxlab"
                    onChange={changeHandler}
                    value={formdata.linuxlab}
                    id="linuxlab"
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
                    <option value="E+">E+</option>
                    <option value="E">E</option>
                    <option value="F">F</option>
                </select>

                <label htmlFor="javalab" className="self-start">Java Lab : </label>
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
                    <option value="E+">E+</option>
                    <option value="E">E</option>
                    <option value="F">F</option>
                </select>

                <label htmlFor="deca" className="self-start">DECA : </label>
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
                    <option value="E+">E+</option>
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

export default Fourth;
