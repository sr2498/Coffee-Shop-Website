/* eslint-disable max-len */
import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import styles from "./menu.module.css";
import Image from "next/image";
import menuCupImg from "../public/menu-cup.jpg";

const Menu = () => {
  const dummyCoffee = [
    [
      {
        name: "Espresso",
        desc: "A classic and concentrated shot of coffee, brewed under high pressure, resulting in a rich and intense flavor. Perfect for those seeking a quick and bold caffeine kick.",
      },
      {
        name: "Cappuccino",
        desc: "A harmonious blend of espresso, steamed milk, and a generous layer of frothed milk on top. This Italian delight offers a balanced taste with a velvety texture.",
      },
      {
        name: "Latte",
        desc: "A smooth and creamy coffee made with a shot of espresso and steamed milk, finished with a thin layer of milk foam. Delight in its mellow flavor and satisfying warmth.",
      },
    ],
    [
      {
        name: "Mocha",
        desc: "A delightful combination of espresso, steamed milk, and luscious chocolate syrup, topped with whipped cream and a sprinkle of cocoa. A sweet and indulgent treat for coffee and chocolate lovers alike.",
      },
      {
        name: "Americano",
        desc: "A simple yet satisfying coffee made by diluting a shot of espresso with hot water. Experience the pure essence of coffee with a smooth and robust taste.",
      },
      {
        name: "Macchiato",
        desc: 'A small but potent coffee consisting of a shot of espresso "marked" with a touch of foamed milk. Enjoy its bold flavor with a hint of creaminess.',
      },
    ],
    [
      {
        name: "Flat White",
        desc: "A velvety coffee with a double shot of espresso, complemented by a small amount of steamed milk, resulting in a rich and smooth taste.",
      },
      {
        name: "Cold Brew",
        desc: "A refreshing and bold coffee created by steeping coarsely ground beans in cold water for an extended period. Served over ice, it offers a smooth and less acidic flavor profile.",
      },
      {
        name: "Iced Latte",
        desc: "A cooling twist on the classic latte, made with espresso and chilled milk, served over ice. Ideal for warm days, providing a creamy and refreshing coffee experience.",
      },
    ],
  ];

  const header = <Image src={menuCupImg} className="relative" fill />;
  return (
    <div className="mb-3">
      <h2 className={`${styles.menuHeader} text-center`}>Menu - Drinks</h2>
      {dummyCoffee.map((coffeeRow) => (
        <div className="grid grid-nogutter">
          {coffeeRow.map((coffee) => (
            <div className="col-12 md:col-6 lg:col-4">
              <Card
                title={coffee.name}
                // footer={footer}
                header={header}
                className="m-6"
              >
                <p className={`${styles.menuItemDesc} m-0`}>{coffee.desc}</p>
              </Card>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
