import { mount } from '@vue/test-utils';
import ProgressBar from '@/components/ProgressBar.vue';

describe('snapshot - ProgressBar.vue', () => {
    // test that the progress bar is rendering in the same way as before
    it('renders correctly', () => {
        const wrapper = mount(ProgressBar);
        expect(wrapper.element).toMatchSnapshot();
    });
});
