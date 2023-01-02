import { Counter } from './App';

function Message(props) {
  const names = props.name;
  const profile = props.profile_pic;
  console.log(props);
  return (
    <div>
      <img className="profile_pic" src={profile}></img>
      <p>Hello, I am {names} 😊!!!</p>
      <p><Counter /></p>
    </div>
  );
}
