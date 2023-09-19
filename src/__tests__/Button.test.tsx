import Modal from '@components/Modal';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

describe('Modal', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    render(
      <Modal>
        <h1>Title test</h1>
      </Modal>,
    );
  });

  describe('When button clicked', () => {
    it('should open the modal', () => {
      const button = screen.getByTestId('modal--button');
      const modal = screen.getByTestId('modal');

      expect(modal.getAttribute('data-rm-is-open')).toBe('false');
      act(() => button.click());
      expect(modal.getAttribute('data-rm-is-open')).toBe('true');
      act(() => button.click());
      expect(modal.getAttribute('data-rm-is-open')).toBe('false');
    });
  });

  describe('When modal is open', () => {
    it('should close the modal when clicking on the container', () => {
      const button = screen.getByTestId('modal--button');
      const modal = screen.getByTestId('modal');
      const container = screen.getByTestId('modal--container');

      expect(modal.getAttribute('data-rm-is-open')).toBe('false');
      act(() => button.click());
      expect(modal.getAttribute('data-rm-is-open')).toBe('true');
      act(() => container.click());
      expect(modal.getAttribute('data-rm-is-open')).toBe('false');
    });

    it('should not close when clicking the dialog', () => {
      const button = screen.getByTestId('modal--button');
      const modal = screen.getByTestId('modal');
      const dialog = screen.getByTestId('modal--dialog');

      act(() => button.click());
      expect(modal.getAttribute('data-rm-is-open')).toBe('true');
      act(() => dialog.click());
      expect(modal.getAttribute('data-rm-is-open')).toBe('true');
    });
  });
});
