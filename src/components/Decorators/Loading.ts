import { createDecorator } from 'vue-class-component';

interface HasLoading {
  loading: boolean;
}

const Loading = createDecorator((options, key) => {
  if (options.methods === undefined) {
    return;
  }

  const originalMethod = options.methods[key];

  // eslint-disable-next-line no-param-reassign
  options.methods[key] = async function wrapperMethod(...args) {
    const loadingComponent = this.$buefy.loading.open({
      container: this.$el,
      isFullPage: false,
      canCancel: false,
    });

    try {
      await originalMethod.apply(this, args);

    // eslint-disable-next-line no-useless-catch
    } catch (e) {
      throw e;
    } finally {
      loadingComponent.close();
    }
  };
});

export default Loading;
