// react
import React from "react";
// chakra ui
import { Button, Table, TableContainer, Tbody, Td, Tr } from "@chakra-ui/react";
// redux
import { useSelector, useDispatch } from "react-redux";
import { quantityCount } from "../../../helper/function";
import { addItem, removeItem } from "../../../redux/cart/CartAction";

const BuyProduct = ({ data }) => {
  const { variants } = data;

  const state = useSelector((state) => state.cartsState);
  const dispatch = useDispatch();

  console.log(state);

  return (
    <TableContainer>
      <Table borderColor="red !important">
        <Tbody>
          {variants.map((variant) => (
            <Tr key={variant.id}>
              <Td>Price: {`${variant.formatted_price}`}</Td>
              <Td>Quantity: {`${Math.abs(variant.inventory_quantity)}`}</Td>
              <Td>Weight: {`${variant.weight}`}</Td>
              <Td isNumeric>
                {quantityCount(state, variant.id) <= 0 && (
                  <Button
                    colorScheme="green"
                    onClick={() => dispatch(addItem(variant))}
                  >
                    Request
                  </Button>
                )}
                {quantityCount(state, variant.id) === 1 && (
                  <Button
                    colorScheme="red"
                    onClick={() => dispatch(removeItem(variant))}
                  >
                    Remove
                  </Button>
                )}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default BuyProduct;
