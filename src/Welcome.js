function Welcome(props) {
  const names = props.name;
  const profile_pic = props.profile_pic;
  return (
    <>
      <img className="profile_pic" src={profile_pic}></img>
      <p>Welcome, {names}</p>
    </>
  );
}
