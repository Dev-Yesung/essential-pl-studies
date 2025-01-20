import investmentLogoImg from "../../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={investmentLogoImg} alt="Investment Logo" />
      <h1>React Investment Calculator</h1>
    </header>
  );
}