import Warning, { WARNING_TYPES } from '../helpers/Warning';

export const WARNINGS = {
  DEP_WRITABLE_MOCK: new Warning(
    'WritableMock is deprecated and will soon be removed. Please use directly BufferWritableMock or ObjectWritableMock instead.',
    WARNING_TYPES.DEPRECATED,
    'DEP001'
  )
};