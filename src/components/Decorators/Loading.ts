import Component, { createDecorator } from 'vue-class-component';
import Vue from 'vue';

interface HasLoading {
  loading: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isCompatible(component: any): component is HasLoading {
  return component && typeof component.loading === 'boolean';
}

export const Loading = createDecorator((options, key) => {
  if (options.methods === undefined) {
    return;
  }

  const originalMethod = options.methods[key];

  // eslint-disable-next-line no-param-reassign
  options.methods[key] = async function wrapperMethod(...args) {
    if (!isCompatible(this)) {
      return;
    }
    this.loading = true;

    try {
      await originalMethod.apply(this, args);
      // eslint-disable-next-line no-useless-catch
    } catch (e) {
      throw e;
    } finally {
      this.loading = false;
    }
  };
});

@Component
export class LoadingMixin extends Vue {
  protected loading = false;
}
