import {
  Box,
  Center,
  CircularProgress,
  CircularProgressLabel,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import useCalorie from '../../utils/store/useCalorie';
import useUser from '../../utils/store/useUser';

const Header: React.FC = () => {
  const { user } = useUser();
  const { setCal } = useCalorie();
  const [massage, setMassage] = useState('');
  const weight = user ? parseInt(user.weight) * 2.20462 : 0;
  const height = user ? parseInt(user.height) * 0.393701 : 0;
  const age = user ? parseInt(user.age) : 0;
  const calories =
    user && user.man !== null
      ? 66 + 6.2 * weight + 12.7 * height - 6.67 * age
      : 655.1 + 4.35 * weight + 4.7 * height - 4.7 * age;
  const BMI = user
    ? parseInt(user.weight) /
        ((parseInt(user.height) / 100) * (parseInt(user.height) / 100)) || 0
    : 0;
  useEffect(() => {
    if (BMI < 18.5) {
      setMassage('دچار کمبود وزن شدید می باشید');
    } else if (BMI < 25) {
      setMassage('وزن  متوسط');
    } else if (BMI < 30) {
      setMassage('اضافه وزن بالا');
    } else {
      setMassage('اضافه وزن بسیار زیاد');
    }
    setCal(Math.round(calories));
  }, [BMI]);

  return (
    <>
      <Box h="96" w="full">
        <Center h="96">
          <VStack zIndex={100}>
            <CircularProgress
              max={Math.round(calories)}
              size={'56'}
              value={1500}
              color="green.800"
            >
              <CircularProgressLabel fontSize={['lg', '2xl']} color="green.800">
                کاری مصرفی
              </CircularProgressLabel>
            </CircularProgress>
            <Text zIndex={100} fontSize={['lg', 'xl']} mr="3" color="green.800">
              {massage}
            </Text>
          </VStack>
          <VStack>
            <Text
              zIndex={100}
              textAlign="center"
              fontSize={['lg', 'xl']}
              mr="3"
              color="green.800"
            >
              میانگین کالری :
            </Text>
            <Text zIndex={100} fontSize={['lg', 'xl']} mr="3" color="green.800">
              {Math.round(calories)}
            </Text>
            <Text zIndex={100} fontSize={['lg', 'xl']} mr="3" color="green.800">
              BMI شما:
            </Text>
            <Text zIndex={100} fontSize={['lg', 'xl']} mr="3" color="green.800">
              {BMI.toFixed(2)}
            </Text>
          </VStack>
        </Center>
      </Box>
    </>
  );
};

export default Header;
