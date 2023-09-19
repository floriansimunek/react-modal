import Modal from '@components/Modal';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Modal', () => {
  describe('When component called', () => {
    beforeEach(() => {
      document.body.innerHTML = '';
      render(
        <Modal>
          <h1>Title test</h1>
        </Modal>,
      );
    });

    it('should render the Button', () => {
      const button = screen.getByTestId('modal--button');
      expect(button).toBeInTheDocument();
    });

    it('should render the Dialog', () => {
      const container = screen.getByTestId('modal--container');
      expect(container).toBeInTheDocument();
    });

    it('should render the Modal', () => {
      const modal = screen.getByTestId('modal');
      expect(modal).toBeInTheDocument();
    });
  });
});
