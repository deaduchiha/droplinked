// react
import { Button, Table, TableContainer, Tbody, Td, Tr } from "@chakra-ui/react";
import React from "react";

const BuyProduct = ({ data }) => {
  const { variants } = data;

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
                <Button colorScheme="green">Request</Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default BuyProduct;
