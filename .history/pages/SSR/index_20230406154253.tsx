import { GetServerSideProps } from "next";

interface ISSR {}

const SSR: React.FC<ISSR> = ({}) => {
  return <></>;
};

export default SSR;

export const getServerSideProps: GetServerSideProps<ISSR> = async() => {
return {
  props: {
    
  }
}
}