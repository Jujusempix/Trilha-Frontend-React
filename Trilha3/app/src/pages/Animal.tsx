import { useParams } from "react-router";

const Animal = () => {
  const { name } = useParams<{ name: string }>();

  return (
    <div>
      <h2>Animal: {name}</h2>
    </div>
  );
};

export default Animal;
