import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
} from "@chakra-ui/react";
import { useFormik } from "formik";

const HamburgerForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
    },
    validate: (values) => {
      const errors = {
        firstName: "",
        lastName: "",
      };
      if (!values.firstName) {
        errors.firstName = "This is required";
      } else if (values.firstName.length > 1 && values.firstName.length < 4) {
        errors.firstName = "Minimum length should be 4";
      }
      if (!values.lastName) {
        errors.lastName = "This is required";
      } else if (values.lastName.length > 1 && values.lastName.length < 4) {
        errors.lastName = "Minimum length should be 4";
      }
      return errors;
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <Flex bg="gray.100" align="center" justify="center" h="100vh">
      <Box bg="white" p={6} rounded="md" w="500px">
        <form onSubmit={formik.handleSubmit}>
          <FormControl
            isInvalid={!!formik.errors.firstName && formik.touched.firstName}
          >
            <FormLabel htmlFor="firstName">First name</FormLabel>
            <Input
              id="firstName"
              placeholder="First Name"
              onChange={formik.handleChange}
              value={formik.values.firstName}
            />
            <FormErrorMessage>
              {formik.errors.firstName && formik.errors.firstName}
            </FormErrorMessage>
          </FormControl>
          <FormControl
            isInvalid={!!formik.errors.lastName && formik.touched.lastName}
          >
            <FormLabel htmlFor="lastName">Last name</FormLabel>
            <Input
              id="lastName"
              placeholder="Last Name"
              onChange={formik.handleChange}
              value={formik.values.lastName}
            />
            <FormErrorMessage>
              {formik.errors.lastName && formik.errors.lastName}
            </FormErrorMessage>
          </FormControl>
          <Button type="submit" mt={4} colorScheme="teal">
            Submit
          </Button>
        </form>
      </Box>
    </Flex>
  );
};

export default HamburgerForm;
