import { Button } from "react-bootstrap";

export function Buttons({ value }) {
  return (
    <>
      {value.map((v) => (
        <Button variant="outline-success">{v}</Button>
      ))}
    </>
  );
}
