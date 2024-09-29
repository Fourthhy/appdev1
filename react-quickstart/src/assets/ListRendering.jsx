const Programs = [
    {title: "BSIS", id: 1, isProgram: true},
    {title: "BSSW", id: 2, isProgram: false},
    {title: "BSAIS", id: 3, isProgram: false},
    {title: "BAB", id: 4, isProgram: false},
    {title: "BSA", id: 5, isProgram: false},
    {title: "ACT", id: 6, isProgram: false},
];


export default function ListRendering() {
    const content = Programs.map(program =>
        <li
            key={program.id}
            style={{
                color: program.isProgram ? 'blue' : 'lightgreen' 
            }}
        >
            {program.title}
        </li>
    );
    return (
        <ul>{content}</ul>
    )
}