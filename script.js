let  students = [  {
    name: "Gabriel",
    gradeOfTheFirstTest: 6,
    gradeOfTheSecondTest: 8
},

{
    name: "Pamela",
    gradeOfTheFirstTest: 7,
    gradeOfTheSecondTest: 10
},

{
    name: "João",
    gradeOfTheFirstTest: 4,
    gradeOfTheSecondTest: 6
}
];


function calcAverageGrade (grade1, grade2) {
    return ((grade1 + grade2) / 2).toFixed(1)
}


for(let student of students) {

    let averageGrade = calcAverageGrade(student.gradeOfTheFirstTest, student.gradeOfTheSecondTest);
    if(averageGrade >= 7){
        alert(`A média do(a) aluno(a) ${student.name} é: ${averageGrade}`
        +`\nParabéns, ${student.name}! Você foi aprovado(a) no concurso!`)
    }else {
        alert(`A média do(a) aluno(a) ${student.name} é: ${averageGrade}`
        +`\nNão foi dessa vez, ${student.name}! Tente novamente!`)
    }
}
