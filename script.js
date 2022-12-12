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




for(let i = 0; i < students.length; i++) {

    let averageGrade = calcAverageGrade(students[i].gradeOfTheFirstTest, students[i].gradeOfTheSecondTest);
    let name = students[i].name
    if(averageGrade >= 7){
        alert("A média do(a) aluno(a) " + name +" é: " + averageGrade 
        +"\nParabéns, "+ name + ("! Você foi aprovado(a) no concurso!"))
    }else {
        alert("A média do(a) aluno(a) " + name +" é: " + averageGrade 
        +"\nNão foi dessa vez, "+ name + ("! Tente novamente!"))
    }
}