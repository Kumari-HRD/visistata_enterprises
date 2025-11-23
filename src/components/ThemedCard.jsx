import styled from "styled-components";

const Card = styled.div`
  background: hsl(var(--background));
  color: hsl(var(--foreground));
  border: 1px solid hsl(var(--border));
  padding: 1rem;
  border-radius: var(--radius);
  margin-top: 1rem;
`;

export default function ThemedCard() {
  return <Card>Theme Styled Card ✅</Card>;
}
