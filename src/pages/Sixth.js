import React, { useState } from 'react';

const Sixth = () => {
    const [formdata, setFormData] = useState({ dip: "", ml:"", iss:"", cao:"", ai:"", cc:"", opt:"", diplab:"", mllab:"", pylab:"", madlab:"", deca:"" });

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
                'subject1': 2.0,
                'subject2': 3.0,
                'subject3': 2.0,
                'subject4': 3.0,
                'subject5': 2.0,
                'subject6': 3.0,
                'subject7': 2.0,
                'subject8': 1.5,
                'subject9': 1.5,
                'subject10': 1.5,
                'subject11': 1.5,
                'subject12': 0.5,
            };

            var subject1Grade = gradeMap[formdata.dip];
            var subject2Grade = gradeMap[formdata.ml];
            var subject3Grade = gradeMap[formdata.iss];
            var subject4Grade = gradeMap[formdata.cao];
            var subject5Grade = gradeMap[formdata.ai];
            var subject6Grade = gradeMap[formdata.cc];
            var subject7Grade = gradeMap[formdata.opt];
            var subject8Grade = gradeMap[formdata.diplab];
            var subject9Grade = gradeMap[formdata.mllab];
            var subject10Grade = gradeMap[formdata.pylab];
            var subject11Grade = gradeMap[formdata.madlab];
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
        <h1 className='text-lg font-bold text-white'> Semester - 6 </h1>
        <div>
            <form className="flex flex-col w-full max-w-md p-5 bg-[#972fff] mt-3 gap-2 rounded-md" onSubmit={submitHandler}>
                <label htmlFor="dip" className="self-start">Digital Image Processing : </label>
                <select
                    className="border rounded-md w-[100] h-8 p-1 hover:shadow-lg"
                    name="dip"
                    onChange={changeHandler}
                    value={formdata.dip}
                    id="dip"
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

                <label htmlFor="ml" className="self-start">Machine Learning : </label>
                <select
                    className="border rounded-md w-[100] h-8 p-1 hover:shadow-lg"
                    name="ml"
                    onChange={changeHandler}
                    value={formdata.ml}
                    id="ml"
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

                <label htmlFor="iss" className="self-start">Information Security System : </label>
                <select
                    className="border rounded-md w-[100] h-8 p-1 hover:shadow-lg"
                    name="iss"
                    onChange={changeHandler}
                    value={formdata.iss}
                    id="iss"
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

                <label htmlFor="cao" className="self-start">Computer Architecture and Organization : </label>
                <select
                    className="border rounded-md w-[100] h-8 p-1 hover:shadow-lg"
                    name="cao"
                    onChange={changeHandler}
                    value={formdata.cao}
                    id="cao"
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

                <label htmlFor="ai" className="self-start">Artificial Intelligence : </label>
                <select
                    className="border rounded-md w-[100] h-8 p-1 hover:shadow-lg"
                    name="ai"
                    onChange={changeHandler}
                    value={formdata.ai}
                    id="ai"
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

                <label htmlFor="cc" className="self-start">Cloud Computing : </label>
                <select
                    className="border rounded-md w-[100] h-8 p-1 hover:shadow-lg"
                    name="cc"
                    onChange={changeHandler}
                    value={formdata.cc}
                    id="cc"
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

                <label htmlFor="opt" className="self-start">NLP / ANN / Distributed System / Software Defined Network / Ecommerce and ERP : </label>
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
                    <option value="E+">E+</option>
                    <option value="F">F</option>
                </select>

                <h1> Practicals </h1>

                <label htmlFor="diplab" className="self-start">Digital Image Processing Lab  : </label>
                <select
                    className="border rounded-md w-[100] h-8 p-1 hover:shadow-lg"
                    name="diplab"
                    onChange={changeHandler}
                    value={formdata.diplab}
                    id="diplab"
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
                    <option value="E+">E+</option>
                    <option value="F">F</option>
                </select>

                <label htmlFor="mllab" className="self-start">Machine Learning Lab :</label>
                <select
                    className="border rounded-md w-[100] h-8 p-1 hover:shadow-lg"
                    name="mllab"
                    onChange={changeHandler}
                    value={formdata.mllab}
                    id="mllab"
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

                <label htmlFor="pylab" className="self-start">Python Lab : </label>
                <select
                    className="border rounded-md w-[100] h-8 p-1 hover:shadow-lg"
                    name="pylab"
                    onChange={changeHandler}
                    value={formdata.pylab}
                    id="pylab"
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

                <label htmlFor="madlab" className="self-start">Mobile Application Development Lab : </label>
                <select
                    className="border rounded-md w-[100] h-8 p-1 hover:shadow-lg"
                    name="madlab"
                    onChange={changeHandler}
                    value={formdata.madlab}
                    id="madlab"
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

export default Sixth;
