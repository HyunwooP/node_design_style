import { RequestIE, ResponseIE } from "../../../lib";
import { LayoutIE } from "../entity";
import {
  findLayout,
  findLayoutCount,
  findOneLayout,
  removeLayout,
  updateLayout,
} from "../service";

/**
 * @description
 * 대표 CRUD를 통해 중복되는 객체 호출을 방지한다.
 * @returns {LayoutIE}
 */

/**
 * @method GET
 * @param {RequestIE} req
 * @param {ResponseIE} res
 * @param {Function} next
 * @returns {Promise<String>}
 */
export const findCount = async (
  req: RequestIE,
  res: ResponseIE,
  next: Function
): Promise<String> => {
  return await findLayoutCount();
};

/**
 * @method GET
 * @param {RequestIE} req
 * @param {ResponseIE} res
 * @param {Function} next
 * @returns {Promise<LayoutIE>}
 */
export const findOne = async (
  req: RequestIE,
  res: ResponseIE,
  next: Function
): Promise<LayoutIE> => {
  const conditions: LayoutIE = req.item;
  return await findOneLayout(conditions);
};

/**
 * @method GET
 * @param {RequestIE} req
 * @param {ResponseIE} res
 * @param {Function} next
 * @returns {Promise<[LayoutIE[], number]>}
 */
export const find = async (
  req: RequestIE,
  res: ResponseIE,
  next: Function
): Promise<[LayoutIE[], number]> => {
  const conditions: LayoutIE = req.item;
  return await findLayout(conditions);
};

/**
 * @method POST
 * @param {RequestIE} req
 * @param {ResponseIE} res
 * @param {Function} next
 * @returns {Promise<LayoutIE>}
 */
export const update = async (
  req: RequestIE,
  res: ResponseIE,
  next: Function
): Promise<LayoutIE> => {
  const conditions: LayoutIE = req.item;
  return await updateLayout(conditions);
};

/**
 * @method DELETE
 * @param {RequestIE} req
 * @param {ResponseIE} res
 * @param {Function} next
 * @returns {Promise<object>}
 */
export const remove = async (
  req: RequestIE,
  res: ResponseIE,
  next: Function
): Promise<object> => {
  const conditions: LayoutIE = req.item;
  return await removeLayout(conditions);
};
