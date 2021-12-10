import React from "react"
import {
  Button,
  chakra,
  Input,
  Text,
  useDisclosure,
  Box,
} from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import SwitchFlex from "../SwitchFlex"
import api, { PromoEmail } from "../../utils/api"
import GeneralModal from "../Modals/GeneralModal"
import { yupResolver } from "@hookform/resolvers/yup"
import { singleEmailSchema } from "./validationSchemas"
import FormErrorMsg from "./FormErrorMsg"

const PromotionForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(singleEmailSchema),
  })
  const { isOpen, onOpen, onClose } = useDisclosure()

  const onSubmit = async (data: PromoEmail) => {
    try {
      await api.sendPromoFile(data)
      await api.mailChimpAdd(data.senderEmail)
      onOpen()
      reset()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <chakra.form
        w="100%"
        maxW="55rem"
        m="auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <SwitchFlex w="inherit" p="1.5rem">
          <Box w="100%" mr="1rem" mb={{ base: ".5rem", lg: 0 }}>
            <Input
              isInvalid={errors.senderEmail ? true : false}
              placeholder="Email:"
              bg="white"
              borderRadius="1.5rem"
              color="bcon.gray.primary"
              {...register("senderEmail")}
              fontSize={{ base: ".875rem", xl: "1rem" }}
              border="2px solid"
              borderColor="bcon.teal.primary"
            />
            <FormErrorMsg errorMessage={errors.senderEmail?.message} />
          </Box>
          <Button
            borderRadius="1.5rem"
            bg="bcon.teal.primary"
            p="1rem 3rem"
            type="submit"
            _hover={{ bg: "bcon.teal.dark" }}
            fontWeight="500"
            fontSize={{ base: ".875rem", xl: "1rem" }}
            color="white"
          >
            {" "}
            Get Your Template
          </Button>
        </SwitchFlex>
      </chakra.form>

      <GeneralModal
        isOpen={isOpen}
        onClose={onClose}
        title="Thank you for reaching out!"
      >
        <Text>Together we will make the world a better place!</Text>
      </GeneralModal>
    </>
  )
}

export default PromotionForm
