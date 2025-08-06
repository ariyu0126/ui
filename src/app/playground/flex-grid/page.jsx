import { SourceCodeViewer, Flex, Typography } from '@/components';
import '@/styles/pages/playground.scss';

const FlexGridPlayground = () => {
  return (
    <div className="playground">
      <Typography.Title>Flex Grid</Typography.Title>
      <Typography.Title level={2}>1. Flex Grid</Typography.Title>
      <div className="playground__inner">
        <Typography.Title level={3}>1-1. Flex Grid 속성</Typography.Title>
        <Typography.Text>- direction : row, column</Typography.Text>
        <Flex direction="row">
          <div className="box">1</div>
          <div className="box">2</div>
          <div className="box">3</div>
        </Flex>
        <Flex direction="column">
          <div className="box">1</div>
          <div className="box">2</div>
          <div className="box">3</div>
        </Flex>
        <Typography.Text>- justify : start, center, end, between, around, evenly</Typography.Text>
        <Flex justify="start">
          <div className="box">1</div>
          <div className="box">2</div>
          <div className="box">3</div>
        </Flex>
        <Flex justify="center">
          <div className="box">1</div>
          <div className="box">2</div>
          <div className="box">3</div>
        </Flex>
        <Flex justify="end">
          <div className="box">1</div>
          <div className="box">2</div>
          <div className="box">3</div>
        </Flex>
        <Flex justify="between">
          <div className="box">1</div>
          <div className="box">2</div>
          <div className="box">3</div>
        </Flex>
        <Flex justify="around">
          <div className="box">1</div>
          <div className="box">2</div>
          <div className="box">3</div>
        </Flex>
        <Flex justify="evenly">
          <div className="box">1</div>
          <div className="box">2</div>
          <div className="box">3</div>
        </Flex>
        <Typography.Text>- align : start, center, end</Typography.Text>
        <Flex align="start">
          <div className="box">1</div>
          <div className="box">2</div>
          <div className="box">3</div>
        </Flex>
        <Flex align="center">
          <div className="box">1</div>
          <div className="box">2</div>
          <div className="box">3</div>
        </Flex>
        <Flex align="end">
          <div className="box">1</div>
          <div className="box">2</div>
          <div className="box">3</div>
        </Flex>
        <Typography.Text>- gap : none, sm, md, lg, xl</Typography.Text>
        <Flex gap="none">
          <div className="box">1</div>
          <div className="box">2</div>
          <div className="box">3</div>
        </Flex>
        <Flex gap="sm">
          <div className="box">1</div>
          <div className="box">2</div>
          <div className="box">3</div>
        </Flex>
        <Flex gap="md">
          <div className="box">1</div>
          <div className="box">2</div>
          <div className="box">3</div>
        </Flex>
        <Flex gap="lg">
          <div className="box">1</div>
          <div className="box">2</div>
          <div className="box">3</div>
        </Flex>
        <Flex gap="xl">
          <div className="box">1</div>
          <div className="box">2</div>
          <div className="box">3</div>
        </Flex>
      </div>
    </div>
  );
};

export default FlexGridPlayground;
