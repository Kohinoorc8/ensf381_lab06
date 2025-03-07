import logo from './logo.svg';
import './App.css';

function EngineeringTopics() {

    const topics = [ 
        {title: "Software Engineering", description: "Building innovative software solutions for the modern world."},
        {title: "Electrical Engineering", description: "Powering innovation in electronics and systems."},
        {title: "Mechanical Engineering", description: "Designing machines and systems that shape the future."},
        {title: "Chemical Engineering", description: "Advancing processes for a sustainable future."}
        ];
    
    const topiclist = topics.map(function (topic, index) {
        return (
            <li key={index}>
                <h3>{topic.title}</h3>
                <p>{topic.description}</p>
            </li>
        )
    });
   
    return (
        <div>
            <h2>Engineering Topics</h2>
            <ul>
                {topiclist}
            </ul>
        </div>
    );
}

export default EngineeringTopics;