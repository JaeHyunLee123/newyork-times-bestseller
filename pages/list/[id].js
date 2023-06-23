import { useRouter } from "next/router";

export default function Detail() {
  const {
    query: { id },
  } = useRouter();

  return <div>{id}</div>;
}
