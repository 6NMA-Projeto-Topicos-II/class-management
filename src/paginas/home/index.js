import Card from "../../Componentes/Card";
import "./style.css";

export default function Home() {
  return (
    <div className="main">
      <ol className="listacards">
        <li className="itemlista">
          <Card lab="L101" estado="Manuntenção" />
        </li>
        <li className="itemlista">
          <Card lab="L102" estado="Disponível"></Card>
        </li>
        <li className="itemlista">
          <Card lab="L103" estado="Acesso livre" />
        </li>
        <li className="itemlista">
          <Card lab="L104" estado="Disponível"></Card>
        </li>
        <li className="itemlista">
          <Card
            lab="L105"
            estado="Em aula"
            titulo="Computação Gráfica"
            professor="Iago Medeiros"
            inicio="8:00"
            fim="11:40"
          />
        </li>
        <li className="itemlista">
          <Card lab="L106" estado="Disponível"></Card>
        </li>
        <li className="itemlista">
          <Card
            lab="L107"
            estado="Em aula"
            titulo="Calculo I"
            professor="Alice Messias"
            inicio="13:00"
            fim="17:40"
          />
        </li>
        <li className="itemlista">
          <Card lab="L308" estado="Disponível"></Card>
        </li>
        <li className="itemlista">
          <Card lab="E201" estado="Disponível"></Card>
        </li>
        <li className="itemlista">
          <Card lab="E202" estado="Disponível"></Card>
        </li>
        <li className="itemlista">
          <Card lab="D202" estado="Disponível"></Card>
        </li>
      </ol>
    </div>
  );
}
