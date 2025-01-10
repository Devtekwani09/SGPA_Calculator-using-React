import React, { useState } from 'react';

const First = () => {
    const [formdata, setFormData] = useState({dla: "", eedm : "", dlalab:"", cvlab:"", its: "", ts:"", deca: ""});

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
                'subject2': 3.0,
                'subject3': 2.0,
                'subject4': 2.0,
                'subject5': 2.5,
                'subject6': 2.0,
                'subject7': 0.5,
                
            };

            var subject1Grade = gradeMap[formdata.dla];
            var subject2Grade = gradeMap[formdata.eedm];
            var subject3Grade = gradeMap[formdata.dlalab];
            var subject4Grade = gradeMap[formdata.cvlab];
            var subject5Grade = gradeMap[formdata.its];
            var subject6Grade = gradeMap[formdata.ts];
            var subject7Grade = gradeMap[formdata.deca];

            

            var totalGradePoints = subject1Grade * creditHours['subject1'] +
                                   subject2Grade * creditHours['subject2'] +
                                   subject3Grade * creditHours['subject3'] +
                                   subject4Grade * creditHours['subject4'] +
                                   subject5Grade * creditHours['subject5'] +
                                   subject6Grade * creditHours['subject6'] +
                                   subject7Grade * creditHours['subject7'] ;

            var totalCreditHours = creditHours['subject1'] + creditHours['subject2'] + creditHours['subject3'] + creditHours['subject4'] + creditHours['subject5'] + creditHours['subject6'] + creditHours['subject7'];

            var sgpa = totalGradePoints / totalCreditHours;
            var finalsgpa = Number(sgpa.toFixed(2));


            setSgpa(finalsgpa);

           
    }

    return (
        <div className="flex flex-col justify-center items-center ">
        <h1 className='text-lg font-bold text-white'> Semester - 7 / 8 </h1>
        <div>
            <form className="flex flex-col w-full max-w-md p-5 bg-[#972fff] mt-3 gap-2 rounded-md" onSubmit={submitHandler}>
                <label htmlFor="dla" className="self-start">Deep Learning and Its Applications / Big Data Analytics / IOT </label>
                <select
                    className="border rounded-md w-[100] h-8 p-1 hover:shadow-lg"
                    name="dla"
                    onChange={changeHandler}
                    value={formdata.dla}
                    id="dla"
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

                <label htmlFor="eedm" className="self-start">Environmental Engineering and Disaster Management </label>
                <select
                    className="border rounded-md w-[100] h-8 p-1 hover:shadow-lg"
                    name="eedm"
                    onChange={changeHandler}
                    value={formdata.eedm}
                    id="eedm"
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

                <label htmlFor="dlalab" className="self-start">DLA LAb / BDA Lab </label>
                <select
                    className="border rounded-md w-[100] h-8 p-1 hover:shadow-lg"
                    name="dlalab"
                    onChange={changeHandler}
                    value={formdata.dlalab}
                    id="dlalab"
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

                <label htmlFor="cvlab" className="self-start">CV lab / R-Prog Lab  </label>
                <select
                    className="border rounded-md w-[100] h-8 p-1 hover:shadow-lg"
                    name="cvlab"
                    onChange={changeHandler}
                    value={formdata.cvlab}
                    id="cvlab"
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

                <label htmlFor="its" className="self-start">Industrial Training </label>
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
                    <option value="E+">E+</option>
                    <option value="E">E</option>
                    <option value="F">F</option>
                </select>

                <label htmlFor="ts" className="self-start">Seminar </label>
                <select
                    className="border rounded-md w-[100] h-8 p-1 hover:shadow-lg"
                    name="ts"
                    onChange={changeHandler}
                    value={formdata.ts}
                    id="ts"
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

                <label htmlFor="deca" className="self-start">DECA </label>
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



                

                <button className='p-3 bg-[#3a304a] self-center rounded-md hover:bg-[#292136] text-white'>Submit</button>

            </form>

            <div className="flex justify-center items-center bg-[#972fff] h-[8vh] mt-4 mb-4 rounded-lg text-white">
            <p>sgpa: {sgpa}</p>
            </div>
        </div>
        </div>
    );
}

export default First;