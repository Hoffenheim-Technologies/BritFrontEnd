import React from "react";
import Layout from "../Layouts/Layout";

const Contact = () => {
    return <main></main>;
};

Contact.layout = (
    page:
        | string
        | number
        | boolean
        | React.ReactElement<any, string | React.JSXElementConstructor<any>>
        | React.ReactFragment
        | React.ReactPortal
        | null
        | undefined
) => <Layout children={page} title="Contact" />;
export default Contact;
