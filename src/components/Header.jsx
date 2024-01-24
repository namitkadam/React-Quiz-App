import logImg from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <header>
      <img
        src={logImg}
        alt="Quiz logo"
        className="w-3/4 h-32 object-contain mx-auto"
      />
      <h1 className="text-center text-4xl font-extrabold">ReactQuiz</h1>
    </header>
  );
}
