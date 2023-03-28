// react
import React from "react";
// chakra ui
import { Button, Table, TableContainer, Tbody, Td, Tr } from "@chakra-ui/react";
// redux
import { useSelector, useDispatch } from "react-redux";
import { quantityCount } from "../../../helper/function";

const BuyProduct = ({ data }) => {
  const { variants } = data;
  console.log(variants);
  const state = useSelector((state) => state.cartsState);
  const dispatch = useDispatch();

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
                    onClick={() =>
                      dispatch({ type: "ADD_ITEM", payload: variant })
                    }
                  >
                    Request
                  </Button>
                )}
                {quantityCount(state, variant.id) === 1 && (
                  <Button
                    colorScheme="red"
                    onClick={() =>
                      dispatch({ type: "REMOVE_ITEM", payload: variant })
                    }
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
