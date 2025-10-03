"use client";
import { products } from "@/data/products";
import { Formik, Form, Field } from "formik";
import { useState } from "react";
import * as Yup from "yup";
const ProductsPage = () => {
  const [word, setWord] = useState<string>("");
  const [product, setProduct] = useState<any>(products);
  const onSubmit = (values: any) => {
    console.log(values);
    const getkey = products.filter((item: any) =>
      item?.keyWord.toLowerCase().includes(values?.keyword.toLowerCase())
    );

    console.log(getkey, "=====================GET KEY");
  };
  const initialValues = {
    keyword: "",
  };

  const validationSchema = Yup.object().shape({
    keyword: Yup.string().required("Keyword is required"),
  });

  const handleChange = (e: any) => {
    setWord(e.target.value);
    setProduct(
      products.filter((item: any) =>
        item?.keyWord.toLowerCase().includes(word.toLowerCase())
      )
    );
    const getKey = products.filter((item: any) =>
      item?.keyWord.toLowerCase().includes(word.toLowerCase())
    );

    if (getKey) {
      console.log("Ada" + e.target.value);
    } else {
      console.log("Tidak Ada");
    }
  };

  return (
    <div className="grid grid-cols-1 gap-2">
      <section>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => (
            <>
              <Form>
                <Field
                  name="keyword"
                  type="text"
                  placeholder="Search"
                  // onChange={handleChange}
                />
                <button type="submit">Search</button>
              </Form>
            </>
          )}
        </Formik>
      </section>

      <section>
        {product.map((item: any) => (
          <div key={item.id}>
            <h1>{item.name}</h1>
            <img
              src={item?.image}
              alt="Bio Insuleaf"
              width={100}
              height={100}
            />
          </div>
        ))}
      </section>
    </div>
  );
};

export default ProductsPage;
